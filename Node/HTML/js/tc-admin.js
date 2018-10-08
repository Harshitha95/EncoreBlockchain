'use strict';
let textPrompts = {}

function addBusinessParticipant ()
{
    let toLoad = 'addBusiness.html';
	console.log("Inside addBusiness")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('addBusiness');
		console.log("Participant Page Updated");
  });
}

function viewBusinessParticipant ()
{
    let toLoad = 'viewBusiness.html';
	console.log("Inside viewBusiness")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('viewBusiness');
		console.log("Participant Page Updated");
  });
}

function addBankParticipant ()
{
    let toLoad = 'addBank.html';
	console.log("Inside addBank")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('addBank');
		console.log("Participant Page Updated");
  });
}

function viewBankParticipant ()
{
    let toLoad = 'viewBank.html';
	console.log("Inside viewBank")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('viewBank');
		console.log("Participant Page Updated");
  });
}

function addInstrumentPage() {
	
	let toLoad = 'addInstrument.html';
	console.log("Inside addInstrument")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('addInstrument');
		console.log("Asset Page Updated");
  });
}

function viewInstrumentPage() {
	
	let toLoad = 'viewInstrument.html';
	console.log("Inside viewInstrument")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('viewInstrument');
		console.log("Asset Page Updated");
  });
}



function addPPRPage() {
	
	let toLoad = 'addPPR.html';
	console.log("Inside addPPR")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('addPPR');
		console.log("Asset Page Updated");
  });
}

function loanSanctionPage() {
	
	let toLoad = 'loanSanction.html';
	console.log("Inside loanSanction")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('loanSanction');
		console.log("Asset Page Updated");
  });
}

function disbursedPage() {
		let toLoad = 'disbursed.html';
	console.log("Inside disbursed")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('disbursed');
		console.log("disbursed Page Updated");
  });
}

function loanDisbursement() {
	
	let amount =$('#amount').val();
	let loanId =$('#loanId').val();

			let options={};
			options.loanId = loanId;
			options.amount = amount;				
         $.when($.post('/composer/admin/disbursed', options)).done(function(_res)
         { 
					$('#messages').append(formatMessage(_res)); 
			});
			
			$("#Disbursementsubmit").removeAttr('onclick'); 

}

function viewLoanSanctionPage() {

	let toLoad = 'viewLoanSanction.html';
	console.log("Inside loanSanction")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('viewLoanSanction');
		console.log("Asset Page Updated");
  });
}

function addPPR() {
	
	     let options = {};
		//	options.pprId = $('#pprId').val();
			options.programId = $('#programId').val();
			options.businessId =$('#businessId').val();
			options.relationship =$('#relationship').val();
			options.programBusinessLimit = $('#programBusinessLimit').val();
			options.programBusinessROI = $('#programBusinessROI').val(); 

			options.programBusinessDiscountPeriod = $('#programBusinessDiscountPeriod').val();
			options.programBusinessDiscountPercentage = $('#programBusinessDiscountPercentage').val();
			options.staleDays =$('#staleDays').val();

			options.repaymentAccNo = $('#repaymentAccNo').val();
            $.when($.post('/composer/admin/addPPR', options)).done(function(_res)
            { 
				$('#messages').append(formatMessage(_res)); 
			});
}

function viewLoanSanction() {	
			
			let options={};
			options.instrumentId = $('#instrumentId').val();
			

            $.when($.get('/composer/admin/viewtransaction')).done(function(_results)
            { 
				//$('#messages').append(formatMessage(_res));
				
				//	if(_results.loanSanction!= null) {
			for(let i=0; i<=_results.loanSanction.length; i++){ 
						let _str = '<h3>Loan Sanction Details</h3><ul>';
						_str += '<table width="100%"><tr><th>Sanctioned Loan Id</th><th>Sanction Date</th><th>Sanction Amount</th></tr>';
						_str += '<tr><td>'+_results.loanSanction.loan+'</td><td>'+_results.loanSanction.transactionDate+'</td><td>'+_results.loanSanction.amount+'</td></tr>';
					  _str += '</ul>';
						 $('#messages').append(formatMessage(_results.result));
					  $('#valuetable').empty();
					  $('#valuetable').append(_str);
				}
			/**	else {
				  $('#messages').append(formatMessage(_results.result));
				} **/
			});
}
function addInstrument() {
	
	 let options = {};
	 
			options.instrumentRefNo = $('#instrumentRefNo').val();
			options.instrumentDate =$('#instrumentDate').val();
			options.sellBusinessId =$('#sellBusinessId').val();
			options.buyBusinessId = $('#buyBusinessId').val();
			options.insAmmount = $('#insAmmount').val(); 

			options.insDueDate = $('#insDueDate').val();
			options.insStatus = $('#insStatus').val();
			options.programId =$('#programId').val();
			options.pprId = $('#pprId').val();
			options.uploadBatchNo = $('#uploadBatchNo').val();
			
         $.when($.post('/composer/admin/addInstrument', options)).done(function(_res)
         { 
					$('#messages').append(formatMessage(_res)); 
			});
}

function addProgramAsset() {
	
 let toLoad = 'addProgram.html';
	console.log("Inside addProgram")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('addProgram');
		console.log("Asset Page Updated");
  });
}

function repaymentPage() {
	
 let toLoad = 'repayment.html';
	console.log("Inside repayment")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('repayment');
		console.log("Repayment Page Updated");
  });
}

function viewBusiness()
{
	 let options = {};
			options.businessId = $('#businessId').val();
 			$.when($.get('/composer/admin/viewBusiness', options)).done(function(_results)
            {
            if(_results.business!= null) {
			//let _str = '<h3>Business Details</h3><ul>';
			//_str += '<table width="100%"><tr><th>Business Name</th><th>Business Wallet Id</th><th>Business Loan Wallet Id</th><th>Business Liability  Wallet Id</th><th>Business Principal Wallet Id</th><th>Business ChargesOs Wallet Id</th><th>Business AccountNo</th><th>Business Limit</th></tr>';
          //  _str += '<tr><td>'+_results.business.businessName+'</td><td>'+_results.business.businessWalletId+'</td><td>'+_results.business.businessLoanWalletId+'</td><td>'+_results.business.businessLiabilityWalletId+'</td><td>'+_results.business.businessPrincipalOSWalletId+'</td><td>'+_results.business.businessChargesOSWalletId+'</td><td>'+_results.business.businessAccNo+'</td><td>'+_results.business.businessLimit+'</td></tr>';
       // _str += '</ul>';


          $('#messages').append(formatMessage(_results.result));
        $('#valuetable').empty();
        $('#valuetable').append(_str);
			}
			else {
			  $('#messages').append(formatMessage(_results.result));
			  }
      
	 });
}

function viewProgram()
{
	let options = {};
			options.programId = $('#programId').val();
 			$.when($.get('/composer/admin/viewProgram', options)).done(function(_results)
            { 
            if(_results.program!=null){
			let _str = '<h3>Program Details</h3>';
				_str += '<table width="100%"><tr><th>Program Name</th><th>Program Anchor</th><th>Program Type</th><th>Program_StartDate</th><th>Program_EndDate</th><th>Program Limit</th><th>Program ROI</th><th>Program Exposure</th><th>Discount Percentage</th><th>Sanction Authority</th><th>Sanction Date</th><th>Repayment AccountNo</th><th>Repayment WalletId</th>';
				_str += '<tr><td>'+_results.program.programName+'</td><td>'+_results.program.programAnchor+'</td><td>'+_results.program.programType+'</td><td>'+_results.program.program_StartDate+'</td><td>'+_results.program.program_EndDate+'</td><td>'+_results.program.programLimit+'</td><td>'+_results.program.programROI+'</td><td>'+_results.program.programExposure+'</td><td>'+_results.program.discountPercentage+'</td><td>'+_results.program.sanctionAuthority+'</td><td>'+_results.program.sanctionDate+'</td><td>'+_results.program.repaymentAccountNo+'</td><td>'+_results.program.repaymentWalletId+'</td></tr>';
			 _str += '</ul>';
        $('#valuetable').empty();
        $('#valuetable').append(_str);
				$('#messages').append(formatMessage(_results.result)); 
				}
				else {
					$('#messages').append(formatMessage(_results.result)); 
				}
			});
}

function viewProgramAsset()
{

 let toLoad = 'viewProgram.html';
	console.log("Inside viewProgram")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('viewProgram');
		console.log("Asset Page Updated");
  });
}

function businessWalletsPage() {
	
	let toLoad = 'businessWallets.html';
	console.log("Inside business Wallet Balance Show")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('businessWallets');
		console.log("businessWallets Page Updated");
  });
}

function loanWalletsPage() {
	
	let toLoad = 'loanWallets.html';
	console.log("Inside loan Wallet Balance Show")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('loanWallets');
		console.log("loanWallets Page Updated");
  });
}

function bankWalletPage() {
	
	let toLoad = 'bankWallets.html';
	console.log("Inside bank Wallet Balance Show")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('bankWallets');
		console.log("bankWallets Page Updated");
  });
}


function charges() {
	
	let toLoad = 'charges.html';
	console.log("Inside charges ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('charges');
		console.log("charges Page Updated");
  });
}


function interest() {
	
	let toLoad = 'interest.html';
	console.log("Inside interest ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('interest');
		console.log("interest Page Updated");
  });
}


fun
function marginRefundPage() {
	
	let toLoad = 'marginRefund.html';
	console.log("Inside marginRefund ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('marginRefund');
		console.log("marginRefund Page Updated");
  });
}

function interestRefundPage() {
	
	let toLoad = 'interestRefund.html';
	console.log("Inside interestRefund ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('interestRefund');
		console.log("interestRefund Page Updated");
  });
}

function mainPage()
{
 let toLoad = 'index.html';
	console.log("Inside index")
    $.when($.get(toLoad)).done(function (page)
       {
        $('#body').empty();
        $('#body').append(page);
        updatePage('index');
		console.log("index Page Updated");
  });
}
function go()
{
    let toLoad = 'go.html';
	console.log("Inside go")
    $.when($.get(toLoad)).done(function (page)
        {$('#body').empty();
        $('#body').append(page);
        updatePage('go');
		console.log("go Page Updated");
  });
}

function viewBank()
{

	 let options = {};
			options.bankId = $('#bankId').val();
 			$.when($.get('/composer/admin/viewBank', options)).done(function(_results)
            { 
            if(_results.bank != null){
			let _str = '<h3>Bank Details</h3><ul>';
			_str += '<table width="100%"><tr><th>Bank Name</th><th>Bank Name</th><th>Bank Branch</th><th>Bank Code</th><th>Bank WalletId</th><th>Bank Asset WalletId</th><th>Bank Charges WalletId</th><th>Bank Liability WalletId</th><th>TDS Receivable WalletId</th></tr>';
            _str += '<tr><td>'+_results.bank.bankName+'</td><td>'+_results.bank.bankBranch+'</td><td>'+_results.bank.bankCode+'</td><td>'+_results.bank.bankWalletId+'</td><td>'+_results.bank.bankAssetWalletId+'</td><td>'+_results.bank.bankChargesWalletId+'</td><td>'+_results.bank.bankLiabilityWalletId+'</td><td>'+_results.bank.TDSReceivableWalletId+'</td></tr>';
        _str += '</ul>';
        $('#valuetable').empty();
        $('#valuetable').append(_str);
				$('#messages').append(formatMessage(_results.result)); 
				}
				else {
						$('#messages').append(formatMessage(_results.result)); 
				}
			});
}

function addBusiness()
{
 			let businessAccNo = $('#businessAccNo').val();
			let businessLimit = $('#businessLimit').val();
			let maxROI = $('#maxROI').val();
 			let minROI = $('#minROI').val();
            let options = {};
			options.businessId = $('#businessId').val();
			options.businessName = $('#businessName').val();
			options.businessAccNo =Number(businessAccNo);
			options.businessLimit =Number(businessLimit); 
			options.maxROI = Number(maxROI); 
			console.log("maxROI"+ maxROI +"minROI"+minROI);
			options.minROI = Number(minROI);
				options.bWB = $('#bWB').val();
			console.log("options" +options.businessAccNo);
            $.when($.post('/composer/admin/addBusiness', options)).done(function(_res)
            { 
				$('#messages').append(formatMessage(_res)); 
			});
}

function loanSanction() {

	// console.log("insId " +insId)
	let instrumentId = $('#instrumentNo').val();
	let options={};
	options.instrumentId=instrumentId;
	
	  $.when($.get('/composer/admin/getInstrument', options)).done(function(instrumentDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					 $.when($.post('/composer/admin/loanSanction', instrumentDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
			$("#Sanctionsubmit").removeAttr('onclick'); 
}

function validate() {

	var maxROI=$('#maxROI').val();
	var minROI=$('#minROI').val();
	if(minROI >= maxROI )
	{
	 		$('#messages').append(formatMessage("Minimum ROI should not be greater than Maximum ROI") );
	}

}


function validateDays() {

	var program_StartDate=$('#program_StartDate').val();
	var program_EndDate=$('#program_EndDate').val();
	var discountPeriod=$('#discountPeriod').val();
	
	let timeDifference=Math.abs(program_StartDate.getTime() -program_EndDate.getTime());
							console.log("timeDifference "+timeDifference);
							
							let dayDifference=Math.ceil(timeDifference/ (1000*3600*24));
							console.log("dayDifference "+dayDifference);
							
							if(discountPeriod> dayDifference) {
								$('#messages').append(formatMessage("Discount Period should be less than differnce between start and end date") );
							}
	}

function getBusinessDetails() {
	
	let options={};
	 options.businessId=$("#businessNo").val();
	//console.log("businessId" + businessId);
	
	 $.when($.get('/composer/admin/getBusines_Details', options)).done(function(businessDetails)
	
            { 
             console.log("businessDetails " +businessDetails)
					// $('#messages').append(formatMessage(_res)); 
					 $.when($.post('/composer/admin/getWalletBalance', businessDetails)).done(function(_results)
				      { 
							//$('#messages').append(formatMessage(_res.Result)); 
							 if(_results.walletBalance != null){
			/**let _str = '<h3>Wallet Details</h3><ul>';
			_str += '<h4>Business Name '+_results.walletBalance.businessName+'</h4>';
			_str += '<table width="100%"><tr><th></th><th>Business Wallet</th>'+
			'<th>Business Loan Wallet</th>'+
			'<th>Business Liability Wallet</th>'+
			'<th>Business Charges OS Wallet</th>'+
			'<th>Business Principal OS Wallet</th>';
            _str += '<tr><td>Wallet ID</td><td>'+_results.walletBalance.businessWalletId+
            '</td><td>'+_results.walletBalance.businessLoanWalletId+
            '</td><td>'+_results.walletBalance.businessLiabilityWalletId+
            '</td><td>'+_results.walletBalance.businessChargesOSWalletId+
            '</td><td>'+_results.walletBalance.businessPrincipalOSWalletId+
            '</td></tr><tr><td>Balance</td><td>'+_results.walletBalance.businessWalletBalance+
            '</td><td>'+_results.walletBalance.businessLoanWalletBalance+
            '</td><td>'+_results.walletBalance.businessLiabilityWalletBalance+
            '</td><td>'+_results.walletBalance.businessChargesOSWalletBalance+
            '</td><td>'+_results.walletBalance.businessPrincipalOSWalletBalance+
            '</td></tr>';
        _str += '</ul>'; **/
        	let _str = '<h3> Business Wallet Details</h3>';
        		_str += '</br>';
        		_str += '<p><h4>Business Name :<bold>'+_results.walletBalance.businessName+'</bold></h4></p>';
        		_str += '<table style="width:100%;cell-padding:20px"><tr ><th>Wallet Type</th><th>Wallet ID</th><th>Wallet Balance</th></tr>';
        		_str +='<tr><td width="200px">Business Wallet</td><td>'+_results.walletBalance.businessWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.businessWalletBalance+'</td></tr>';
        		_str +='<tr><td>Business Loan Wallet</td><td>'+_results.walletBalance.businessLoanWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.businessLoanWalletBalance+'</td></tr>';
        		_str +='<tr><td>Business Liability Wallet</td><td>'+_results.walletBalance.businessLiabilityWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.businessLiabilityWalletBalance+'</td></tr>';
        		_str +='<tr><td>Business Charges OS  Wallet</td><td>'+_results.walletBalance.businessChargesOSWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.businessChargesOSWalletBalance+'</td></tr>';
        		_str +='<tr><td>Business Principal OS Wallet</td><td>'+_results.walletBalance.businessPrincipalOSWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.businessPrincipalOSWalletBalance+'</td></tr>';
       // _str += '</ul>';
        $('#valuetable').empty();
        $('#valuetable').append(_str);
				$('#messages').append(formatMessage(_results.result)); 
				}
				else {
						$('#messages').append(formatMessage(_results.result)); 
				}
				
						}); 
			});
}

function getBankDetails() {

	let options ={};
	options.bankId=$('#bankId').val();
	console.log("options" +options)
	 
	$.when($.get('/composer/admin/getBankDetails', options)).done(function(bankDetails){
		  console.log("bankDetails " +bankDetails);
		  $.when($.post('composer/admin/getBankWalletDetails',bankDetails)).done(function(_results){

		  	 if(_results.walletBalance != null){
			/**let _str = '<h3>Wallet Details</h3><ul>';
			_str += '<h4>Bank Name '+_results.walletBalance.bankName+'</h4>';
			_str += '<table width="100%"><tr><th></th><th>Bank Wallet</th>'+
			'<th>Bank Asset Wallet</th>'+
			'<th>Bank Charges Wallet</th>'+
			'<th>Bank Liability Wallet</th>'+
			'<th>TDS Receivable Wallet</th>';
            _str += '<tr><td>Wallet ID</td><td>'+_results.walletBalance.bankWalletId+
            '</td><td>'+_results.walletBalance.bankAssetWalletId+
            '</td><td>'+_results.walletBalance.bankChargesWalletId+
            '</td><td>'+_results.walletBalance.bankLiabilityWalletId+
            '</td><td>'+_results.walletBalance.TDSReceivableWalletId+
            '</td></tr><tr><td>Balance</td><td>'+_results.walletBalance.bankWalletBalance+
            '</td><td>'+_results.walletBalance.bankAssetWalletBalance+
            '</td><td>'+_results.walletBalance.bankChargesWalletBalance+
            '</td><td>'+_results.walletBalance.bankLiabilityWalletBalance+
            '</td><td>'+_results.walletBalance.TDSReceivableWalletBalance+
            '</td></tr>';
        _str += '</ul>'; **/
       let _str = '<h3>Bank Wallet Details</h3>';
        		_str += '</br>';
        		_str += '<p><h4>Bank Name :<bold>'+_results.walletBalance.bankName+'</bold></h4></p>';
        		_str += '<table style="width:100%;cell-padding:20px"><tr ><th>Wallet Type</th><th>Wallet ID</th><th>Wallet Balance</th></tr>';
        		_str +='<tr><td width="200px">Bank Wallet</td><td>'+_results.walletBalance.bankWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.bankWalletBalance+'</td></tr>';
        		_str +='<tr><td>Bank Asset Wallet</td><td>'+_results.walletBalance.bankAssetWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.bankAssetWalletBalance+'</td></tr>';
        		_str +='<tr><td>Bank Charges Wallet</td><td>'+_results.walletBalance.bankChargesWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.bankChargesWalletBalance+'</td></tr>';
        		_str +='<tr><td>Bank Liability Wallet</td><td>'+_results.walletBalance.bankLiabilityWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.bankLiabilityWalletBalance+'</td></tr>';
        		_str +='<tr><td>TDS Receivable Wallet</td><td>'+_results.walletBalance.TDSReceivableWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.TDSReceivableWalletBalance+'</td></tr>';
        $('#valuetable').empty();
        $('#valuetable').append(_str);
				$('#messages').append(formatMessage(_results.result)); 
				}
				else {
						$('#messages').append(formatMessage(_results.result)); 
				}
				
						}); 
			});

}



function addBank()
{
            let options = {};
			options.bankId = $('#bankId').val();
			options.bankName = $('#bankName').val();
			options.bankBranch = $('#bankBranch').val();
			options.bankCode = $('#bankCode').val();
				options.bWB = $('#bWB').val();
			console.log("options" +options.bankId);
            $.when($.post('/composer/admin/addBank', options)).done(function(_res)
            { 
				$('#messages').append(formatMessage(_res)); 
			});
}
  

function addProgram()
{
	let options ={};

		options.programId=$('#programId').val();
		options.programName=$('#programName').val();
		options.programAnchor=$('#programAnchor').val();
		options.programType=$('#programType').val();
		options.program_StartDate=$('#program_StartDate').val();
		options.program_EndDate=$('#program_EndDate').val();
		options.programLimit=$('#programLimit').val();
		options.programROI=$('#programROI').val();
		options.programExposure=$('#programExposure').val();
		options.discountPercentage=$('#discountPercentage').val();
		options.discountPeriod=$('#discountPeriod').val();
		options.sanctionAuthority=$('#sanctionAuthority').val();
		options.sanctionDate=$('#sanctionDate').val();
		options.repaymentAccountNo=$('#repaymentAccountNo').val();

		$.when($.post('/composer/admin/addProgram', options)).done(function(_res)
		{ 
			$('#messages').append(formatMessage(_res)); 
		});
}

function callCharges() {

			let loanId = $('#loanId').val();
			let amount = $('#amount').val();

			console.log("LoanId " +loanId);
			console.log("Amount "+amount);
			if(amount<=0){
			
				$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
			}
			let options={};
			options.loanId=loanId;
			options.amount=amount;
			  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
		            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/calculateCharges', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
			  
			$("#Chargessubmit").removeAttr('onclick'); 
}

function interestInAdvColl() {
	
	let toLoad = 'interestInAdvance.html';
	console.log("Inside charges ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('interestInAdvance');
		console.log("interestInAdvance Page Updated");
  });

}

function collection() {
	
	let toLoad = 'collection.html';
	console.log("Inside collection ")
    $.when($.get(toLoad)).done(function (page)
        {
        $('#body').empty();
        $('#body').append(page);
        updatePage('collection');
		console.log("collection Page Updated");
  });

}

function interestAccChargesPage() {

let toLoad = 'interestAccrualCharge.html';
	console.log("Inside interestAccrualCharge ")
    $.when($.get(toLoad)).done(function (page)
     {
        $('#body').empty();
        $('#body').append(page);
        updatePage('interestAccrualCharge');
		console.log("interestAccrualCharge Page Updated");
  });
}

function accrualChaincode() {

	let toLoad = 'accrualChainCode.html';
	console.log("Inside accrualChainCode ")
    $.when($.get(toLoad)).done(function (page)
     {
        $('#body').empty();
        $('#body').append(page);
        updatePage('accrualChainCode');
		console.log("accrualChainCode Page Updated");
  });

}

function penalChargesPage() {

	let toLoad = 'penalCharges.html';
	console.log("Inside penalCharges ")
    $.when($.get(toLoad)).done(function (page)
     {
        $('#body').empty();
        $('#body').append(page);
        updatePage('penalCharges');
		console.log("penalCharges Page Updated");
  });

}

function penalInterestCollectionPage() {

	let toLoad = 'penalInterestCollection.html';
	console.log(" Inside penalInterestCollection ")
    $.when($.get(toLoad)).done(function (page)
     {
        $('#body').empty();
        $('#body').append(page);
        updatePage('penalInterestCollection');
		console.log("penalInterestCollection Page Updated");
  });

}

function tdsPage() {

	let toLoad = 'tds.html';
	console.log(" Inside tds ")
    $.when($.get(toLoad)).done(function (page)
     {
        $('#body').empty();
        $('#body').append(page);
        updatePage('tds');
		console.log("tds Page Updated");
  });

}

function callIntersetInAdvance() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	
	let options={};
	options.loanId=loanId;
	options.amount=amount;
	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/calInterestInAdvance', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
	
			});
	  	$("#IntInAdvancesubmit").removeAttr('onclick'); 
	
}

function repayment() {


	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;
	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/repayment', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#repaymentsubmit").removeAttr('onclick'); 
}

function marginRefund() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/marginRefund', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#marginrefundsubmit").removeAttr('onclick'); 
}

function interestRefund() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/interestRefund', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#interestrefundsubmit").removeAttr('onclick'); 
}

function accrualChainCode() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/accrualCharges', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#accrualchaincodesubmit").removeAttr('onclick'); 
}
function interestAccrualCharges() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/interestaccrualcharges', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#interestaccrualchargessubmit").removeAttr('onclick'); 

}

function penalCharges() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{
			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/penalCharges', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
						});
			});
	  $("#penalchargessubmit").removeAttr('onclick'); 

}

function penalInterestCollection() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/penalInterestCollection', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
					  });
			});
	  $("#penalInterestCollection").removeAttr('onclick'); 

}


function tds() {

	let loanId = $('#loanId').val();
	let amount = $('#amount').val();

	console.log("LoanId " +loanId);
	console.log("Amount "+amount);

	if(amount<=0)
	{			
		$('#messages').append(formatMessage("Amount should not be less 0 or less than 0"));
	}
	let options={};
	options.loanId=loanId;
	options.amount=amount;

	  $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
					//$('#messages').append(formatMessage(_res)); 
					console.log( "loanDetails "+loanDetails);
					 $.when($.post('/composer/admin/tds', loanDetails)).done(function(_res)
				      { 
							$('#messages').append(formatMessage(_res)); 
					  });
			});
	  $("#tdssubmit").removeAttr('onclick'); 

}

function get_LoanDetails() {

	let loanId = $('#loanId').val();
	console.log("LoanId " +loanId);
	let options={};
	options.loanId=loanId;
	 $.when($.get('/composer/admin/getLoanDetails', options)).done(function(loanDetails)
            { 
            			 $.when($.post('/composer/admin/getLoanWalletBalance', loanDetails)).done(function(_results)
				      { //$('#messages').append(formatMessage(_res.Result)); 
							 if(_results.walletBalance != null){
			/**let _str = '<h3>Wallet Details</h3><ul>';
			_str += '<table width="100%"><tr><th></th><th>Loan Disbursed Wallet</th>'+
			'<th>Loan Charges Wallet</th>'+			
			'<th>Loan Interest Accured Wallet Wallet</th>';
            _str += '<tr><td>Wallet ID</td><td>'+_results.walletBalance.loanDisbursedWalletId+
            '</td><td>'+_results.walletBalance.loanChargesWalletId+           
            '</td><td>'+_results.walletBalance.loanInterestAccuredWalletId+
            '</td></tr><tr><td>Balance</td><td>'+_results.walletBalance.loanDisbursedWalletBalance+
            '</td><td>'+_results.walletBalance.loanChargesWalletBalance+
            '</td><td>'+_results.walletBalance.loanInterestAccuredWalletBalance+
            '</td></tr>';
        _str += '</ul>';**/

        let _str = '<h3>Loan Wallet Details</h3>';
        		_str += '</br>';
        		_str += '<table style="width:100%;cell-padding:20px"><tr ><th>Wallet Type</th><th>Wallet ID</th><th>Wallet Balance</th></tr>';
        		_str +='<tr><td width="200px">Loan Disbursed Wallet</td><td>'+_results.walletBalance.loanDisbursedWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.loanDisbursedWalletBalance+'</td></tr>';
        		_str +='<tr><td>Loan Charges Wallet</td><td>'+_results.walletBalance.loanChargesWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.loanChargesWalletBalance+'</td></tr>';
        		_str +='<tr><td>Loan Interest Accured Wallet</td><td>'+_results.walletBalance.loanInterestAccuredWalletId+'</td><td style="text-align:right;margin-right:10px">'+_results.walletBalance.loanInterestAccuredWalletBalance+'</td></tr>';
        $('#valuetable').empty();
        $('#valuetable').append(_str);
				$('#messages').append(formatMessage(_results.result)); 
				}
				else {
						$('#messages').append(formatMessage(_results.result)); 
				}
			}); 
            });			
	  $("#submit").removeAttr('onclick'); 
}

function cancel()
{
	$('#text input[type="text"]').val('');
}

function updatePage(_page)
{
  for (each in textPrompts[_page]){(function(_idx, _array)
    {$("#"+_idx).empty();$("#"+_idx).append(getDisplaytext(_page, _idx));})(each, textPrompts[_page])}
}

/**
* gets text from the JSON object textPrompts for the requested page and item
* Refer to this by {@link getDisplaytext}.
* @param {String} _page - string representing the name of the html page to be updated
* @param {String} _item - string representing the html named item to be updated
* @namespace 
*/
function getDisplaytext(_page, _item)
{return (textPrompts[_page][_item]);}

/**
 * format messages for display
 */
function formatMessage(_msg) {

$("#messages").html('');
return '<p class="message">'+_msg+'</p>';

}
