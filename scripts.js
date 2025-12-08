const branchNameElement = document.getElementById('branch-name')
const submitBtnElement = document.getElementById('submit-btn')
const outputContainerElement = document.getElementById('output-container')
const formattedBranchNameElement = document.getElementById('formatted-branch-name')
const successMsgElement = document.getElementById('success-msg')

submitBtnElement.addEventListener('click', e => {
  let branchName
  let formattedBranchName

  outputContainerElement.style.display = 'none'

  branchName = branchNameElement.value
  formattedBranchName = formatBranchName(branchName)
  formattedBranchNameElement.innerText = formattedBranchName

  successMsgElement.innerText = `Formatted branch name was generated successfully for the following branch\n${branchName}`
  outputContainerElement.style.display = 'block'
})

const formatBranchName = branchName => {
  let partialName
  let formattedBranchName
  
  partialName = branchName.replace(/[^A-Za-z0-9]/g, ' ')
  if(partialName.trim().length === 0)
    partialName = 'New Branch 1'
  partialName = partialName.replace(/\s+/g, '-').toLowerCase()

  formattedBranchName = partialName
  return formattedBranchName
}
