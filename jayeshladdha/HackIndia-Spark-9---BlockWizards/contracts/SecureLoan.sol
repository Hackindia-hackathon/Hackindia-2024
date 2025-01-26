// contracts/SecureLoan.sol
pragma solidity 0.8.27;

contract SecureLoan {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 repaymentAmount;
        uint256 deadline;
        bool isActive;
    }

    mapping(uint256 => Loan) public loans;
    uint256 public loanCount;

    event LoanCreated(uint256 loanId, address borrower, uint256 amount);
    event LoanRepaid(uint256 loanId);

    function createLoan(uint256 _amount, uint256 _repaymentAmount, uint256 _duration) external {
        require(_amount > 0, "Loan amount must be greater than 0");
        require(_repaymentAmount > _amount, "Repayment amount must be greater than loan amount");

        loanCount++;
        loans[loanCount] = Loan({
            borrower: msg.sender,
            amount: _amount,
            repaymentAmount: _repaymentAmount,
            deadline: block.timestamp + _duration,
            isActive: true
        });

        emit LoanCreated(loanCount, msg.sender, _amount);
    }

    function repayLoan(uint256 _loanId) external payable {
        Loan storage loan = loans[_loanId];
        require(loan.isActive, "Loan is not active");
        require(msg.value >= loan.repaymentAmount, "Insufficient repayment amount");

        loan.isActive = false;
        payable(loan.borrower).transfer(loan.amount);

        emit LoanRepaid(_loanId);
    }
}