const siteLinkText = 'WIKIDONT';

function createLinkButton() {
  const button = document.createElement('button');
  button.textContent = 'WIKIDONT';
  button.addEventListener('click', handleLinkClick);
  return button;
}

function handleLinkClick() {
  let link = prompt('Enter the link destination:', '/');
  if (link === null) {
    return;
  }
  if (link.trim() === '') {
    link = window.location.pathname;
  }
  window.location.href = link;
}

function injectLinkButton() {
  const body = document.querySelector('body');
  const siteLinkButton = createLinkButton();
  siteLinkButton.style.position = 'fixed';
  siteLinkButton.style.top = '10px';
  siteLinkButton.style.left = '10px';
  siteLinkButton.style.zIndex = '9999';
  body.appendChild(siteLinkButton);
}

injectLinkButton();
