branchNameElement = document.getElementById('branch-name')
submitBtnElement = document.getElementById('submit-btn')
outputContainerElement = document.getElementById('output-container')
formattedBranchNameElement = document.getElementById('formatted-branch-name')
successMsgElement = document.getElementById('success-msg')

submitBtnElement.addEventListener('click', e => {
  outputContainerElement.style.display = 'none'
  branchName = branchNameElement.value
  formattedBranchName = formatBranchName(branchName)
  formattedBranchNameElement.innerText = formattedBranchName
  successMsgElement.innerText = `Formatted branch name was generated successfully for the following branch\n${formattedBranchName}`
  outputContainerElement.style.display = 'block'
})

formatBranchName = branchName => {
  formattedBranchName = `Formatted Branch Name: ${branchName}`
  return formattedBranchName
}
