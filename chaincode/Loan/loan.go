package main

import (
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
)

type chainCode struct {
}

type loanInfo struct {
	InstNum            string    `json:"InstrumentNumber"`
	ExposureBusinessID string    `json:"ExposureBusinessID"`
	ProgramID          string    `json:"ProgramID"`
	SanctionAmt        int64     `json:"SanctionAmountt"`
	SanctionDate       time.Time `json:"SanctionDate"`
	SanctionAuthority  string    `json:"SanctionAuthority"`
	ROI                float64   `json:"ROI"`
	DueDate            time.Time `json:"DueDate"`
	ValueDate          time.Time `json:"ValueDate"`
	LoanStatus         string    `json:"LoanStatus"`
	LoanBalance        int64     `json:"LoanBalance"`
}

func (c *chainCode) Init(stub shim.ChaincodeStubInterface) pb.Response {
	return shim.Success(nil)
}

func (c *chainCode) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function, args := stub.GetFunctionAndParameters()

	if function == "newLoanInfo" {
		return c.newLoanInfo(stub, args)
	} else if function == "getLoanInfo" {
		return c.getLoanInfo(stub, args)
	} else if function == "updateLoanInfo" {
		return c.updateLoanInfo(stub, args)
	}
	return shim.Error("No function named " + function + " in Loan")
}

func (c *chainCode) newLoanInfo(stub shim.ChaincodeStubInterface, args []string) pb.Response {

	if len(args) != 12 {
		return shim.Error("Invalid number of arguments for loan")
	}

	//CHECK IF ALREADY EXISTS
	ifExists, err := stub.GetState(args[0])
	if ifExists != nil {
		fmt.Println(ifExists)
		return shim.Error("LoanId " + args[0] + " exits. Cannot create new ID")
	}

	// UNCOMMENT THIS WHILE ALL THE CHAINCODES ARE LINKED
	// SO THAT CHECKING FOR A PROGRAM ID CAN WORK PROPERLY
	/*
		//Checking if the programID exist or not
		chk, err := stub.GetState(args[2])
		if err == nil {
			return shim.Error("This program does not exist")
		} else if chk == nil {
			return shim.Error("There is no information on this program")
		}
	*/

	//SanctionAmt -> sAmt
	sAmt, err := strconv.ParseInt(args[4], 10, 64)
	if err != nil {
		return shim.Error(err.Error())
	}

	//Converting the incoming date from Dd/mm/yy:hh:mm:ss to Dd/mm/yyThh:mm:ss for parsing
	sDateStr := args[5][:10]
	sTime := args[5][11:]
	sStr := sDateStr + "T" + sTime

	//SanctionDate ->sDate
	sDate, err := time.Parse("02/01/2006T15:04:05", sStr)
	if err != nil {
		return shim.Error(err.Error())
	}

	roi, err := strconv.ParseFloat(args[7], 64)
	if err != nil {
		return shim.Error(err.Error())
	}

	//Parsing into date for storage but hh:mm:ss will also be stored as
	//00:00:00 .000Z with the date
	//DueDate -> dDate
	dDate, err := time.Parse("02/01/2006", args[8])
	if err != nil {
		return shim.Error(err.Error())
	}

	//Converting the incoming date from Dd/mm/yy:hh:mm:ss to Dd/mm/yyThh:mm:ss for parsing
	vDateStr := args[5][:10]
	vTime := args[5][11:]
	vStr := vDateStr + "T" + vTime

	//ValueDate ->vDate
	vDate, err := time.Parse("02/01/2006T15:04:05", vStr)
	if err != nil {
		return shim.Error(err.Error())
	}

	loanStatusValues := map[string]bool{
		"open":              true,
		"sanctioned":        true,
		"part disbursed":    true,
		"disbursed":         true,
		"part collected":    true,
		"collected/settled": true,
		"overdue":           true,
	}

	loanStatusValuesLower := strings.ToLower(args[10])
	if !loanStatusValues[loanStatusValuesLower] {
		return shim.Error("Invalid Instrument Status " + args[10])
	}

	loanBalanceString, err := strconv.ParseInt(args[11], 10, 64)
	if err != nil {
		return shim.Error("Error in parsing int in newLoanInfo:" + err.Error())
	}

	loan := loanInfo{args[1], args[2], args[3], sAmt, sDate, args[6], roi, dDate, vDate, loanStatusValuesLower, loanBalanceString}
	loanBytes, err := json.Marshal(loan)
	if err != nil {
		return shim.Error(err.Error())
	}
	stub.PutState(args[0], loanBytes)
	return shim.Success([]byte("Added loan to the leger with ID: " + args[0]))
}

func (c *chainCode) getLoanInfo(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 1 {
		return shim.Error("Invalid number of arguments")
	}

	loanBytes, err := stub.GetState(args[0])
	if err != nil {
		return shim.Error(err.Error())
	} else if loanBytes == nil {
		return shim.Error("No data exists on this loanID: " + args[0])
	}

	loan := loanInfo{}
	err = json.Unmarshal(loanBytes, &loan)
	if err != nil {
		return shim.Error(err.Error())
	}
	loanString := fmt.Sprintf("%+v", loan)

	sanctionString := strconv.FormatInt(loan.SanctionAmt, 10)
	loanStatus := loan.LoanStatus
	loanString = sanctionString + "," + loanStatus
	// joining sacntion string and loan status

	return shim.Success([]byte(loanString))
}

func (c *chainCode) updateLoanInfo(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	if len(args) != 3 {
		return shim.Error("Invalid number of arguments in updateLoanInfo (required:3)")
	}

	loanBytes, err := stub.GetState(args[0])
	if err != nil {
		return shim.Error(err.Error())
	} else if loanBytes == nil {
		return shim.Error("No data exists on this loanID: " + args[0])
	}

	loan := loanInfo{}
	err = json.Unmarshal(loanBytes, &loan)
	if err != nil {
		return shim.Error("error in unmarshiling loan: " + err.Error())
	}
	loan.LoanStatus = args[1]
	loan.LoanBalance, err = strconv.ParseInt(args[2], 10, 64)
	if err != nil {
		return shim.Error("Unable to parse int in updateLoanInfo:" + err.Error())
	}

	loanBytes, err = json.Marshal(loan)
	if err != nil {
		return shim.Error("error in marshalling: " + err.Error())
	}
	err = stub.PutState(args[0], loanBytes)
	if err != nil {
		return shim.Error("Error in loan updation " + err.Error())
	}

	return shim.Success([]byte("Successfully updated loan"))
}

func main() {
	err := shim.Start(new(chainCode))
	if err != nil {
		fmt.Println("Unable to start the chaincode")
	}
}
