export const handleInputChange = (component, name, value) =>
  component.setState({ [name]: value })

// export const submitNotEmptyItems = (items, submitFunc, childName) => {
//   items.forEach((item, index) => {
//     const notEmptyItems = item[childName].filter(subItem => subItem !== '')
//     submitFunc(notEmptyItems, index)
//   })
// }

export const filterEmptyItems = items => {
  const notEmptyItems = items.filter(item => item !== '')
  return notEmptyItems.length === 0 ? [''] : notEmptyItems
}

export const handleAdd = (component, subject) => {
  component.setState(prevState => ({
    [subject]: [...prevState[subject]].concat('')
  }))
}
