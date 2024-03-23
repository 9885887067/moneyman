import './index.css'

const TransactionItem = props => {
  const {transactionDetails,onDeleteTrans} = props
  const {id, title, amount, optionId} = transactionDetails

  const onDelete = () => {
    onDeleteTrans(id)
  }

  return (
    <li className="table-row">
      <p className="row">{title}</p>
      <p className="row">Rs {amount}</p>
      <p className="row">{optionId}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
