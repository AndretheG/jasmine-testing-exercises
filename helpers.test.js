describe('Helpers test', function(){
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it('should accept all bill amounts on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);
    });

    it('should accept all tip amounts on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt').toEqual(20));

        billAmtInput.value = 300;
        tipAmtInput.value = 60;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(80);
    });

    it('should accept all tip percentages on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent').toEqual(20));

        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should calculate the tip percentage on sumPaymentTotal()', function() {
        expect(calculateTipPercent(275, 41.25)).toEqual(15);
        expect(calculateTipPercent(125, 50)).toEqual(40);

    });

    it('should create a new td with a value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test' );
        expect(newTr.children.length).toEqual(1);
        expect(newTr.FirstChild.innerHTML).toEqual('test');
    });

    it('should create a delete button td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');

        appendDeleteBTn(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.FirstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;

    });
});