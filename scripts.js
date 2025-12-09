const branchNameElement = document.getElementById('branch-name')
const submitBtnElement = document.getElementById('submit-btn')
const outputContainerElement = document.getElementById('output-container')
const formattedBranchNameElement = document.getElementById('formatted-branch-name')
const successMsgElement = document.getElementById('success-msg')
const copyClipboardElement = document.getElementById('copy-clipboard')


submitBtnElement.addEventListener('click', e => {
  let branchName
  let formattedBranchName

  outputContainerElement.style.display = 'none'

  branchName = branchNameElement.value
  formattedBranchName = formatBranchName(branchName)
  formattedBranchNameElement.innerText = formattedBranchName

  setSuccessMsg(`Formatted branch name successfully for the following branch\n${branchName}`)
  outputContainerElement.style.display = 'block'
})


copyClipboardElement.addEventListener('click', async e => {
  let formattedBranchName

  formattedBranchName = formattedBranchNameElement.innerText
  await navigator.clipboard.writeText(formattedBranchName)
  setSuccessMsg('Copied to Clipboard!')
})


const setSuccessMsg = msg => {
  successMsgElement.innerText = msg
}


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
