import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="money-manager">
      <div className="your-balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="details-container">
          <p className="balance">Your Balance</p>
          <p className="your-balance" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="your-income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="details-container">
          <p className="balance">Your Income</p>
          <p className="your-balance" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="your-expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="details-container">
          <p className="balance">Your Expenses</p>
          <p className="your-balance" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
