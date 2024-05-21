import _ from 'lodash'

export const countOccurrences = (data, key) => {
  const counts = _.countBy(data, key)
  return _.map(counts, (count, name) => ({ name, count }))
}

export const orderValues = (data) => _.orderBy(data, ['count'], ['desc'])

export const filterTopValues = (data, limit) => {
  return _.slice(orderValues(data), 0, limit)
}

export const transformCounts = (data, key, topValues = false, limit = 10) => {
  const filteredArray = _.filter(data, (item) => item[key])
  const countedItems = countOccurrences(filteredArray, key)
  const transformedArray = topValues
    ? filterTopValues(countedItems, limit)
    : orderValues(countedItems)
  return transformedArray
}

export const extractDomainCounts = (emails) => {
  const domainCounts = {}
  emails.forEach((email) => {
    const domain = email?.substring(email.indexOf('@') + 1)
    domainCounts[domain] = (domainCounts[domain] || 0) + 1
  })
  return domainCounts
}

export const getDomainCounts = (data, threshold = 1, limit = 5) => {
  const domainCounts = extractDomainCounts(data.map(({ email }) => email))
  const countContact = _.pickBy(domainCounts, (count) => count > threshold)
  const transformedArray = _.map(countContact, (count, name) => ({
    name,
    count,
  }))
  return filterTopValues(transformedArray, limit)
}
