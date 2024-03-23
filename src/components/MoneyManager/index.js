import {Component} from 'react'

import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onSubmit = event => {
    const {titleInput, amountInput, optionId} = this.state
    event.preventDefault()
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const newList = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newList],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTrans=id=>{
    const {transactionsList}=this.state

    const updateList=transactionsList.filter(each=>(
      id!==each.id


    ))
    this.setState({
      transactionsList:updateList
    })
    
  }

  getBalance = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    let balanceAmount = 0
    let expensesAmount = 0

    transactionsList.forEach(trans => {
      if (trans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += trans.amount
      } else {
        expensesAmount += trans.amount
      }
    })
    return balanceAmount = incomeAmount - expensesAmount
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(trans => {
      if (trans.type === transactionTypeOptions[0].displayText) {
        incomeAmount += trans.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(trans => {
      if (trans.type === transactionTypeOptions[1].displayText) {
        expensesAmount += trans.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state

    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="richard">Hi, Richard</h1>
            <p className="manager-desc">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>

          <MoneyDetails balance={balance} income={income} expenses={expenses} />
          <div className="transaction-details">
            <form className="form" onSubmit={this.onSubmit}>
              <h1 className="form-heading">Add Transaction</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                className="input"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitle}
              />

              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                className="input"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmount}
              />

              <label className="label" htmlFor="select">
                TYPE
              </label>
              <select id="select" className="input" value={optionId}>
                {transactionTypeOptions.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>

              <button type="submit" className="button">
                Add
              </button>
            </form>

            <div className="history-transaction">
              <h1 className="history">History</h1>

              <div className="transcation-table-container">
                <ul className="transction-table">
                  <li className="table-header">
                    <p className="cell">Title</p>
                    <p className="cell">Amount</p>
                    <p className="cell">Type</p>
                  </li>
                  {transactionsList.map(trans => (
                    <TransactionItem
                      key={trans.id}
                      transactionDetails={trans}
                      onDeleteTrans={this.onDeleteTrans}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
