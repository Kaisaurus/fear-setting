export const handleInputChange = (component, name, value) =>
  component.setState({ [name]: value })

export const submitNotEmptyItems = (items, action, childName) => {
  items.forEach((item, index) => {
    const notEmptyItems = item[childName].filter(subItem => subItem !== '')
    action(notEmptyItems, index)
  })
}
