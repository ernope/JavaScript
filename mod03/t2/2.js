//Open t2 folder in your IDE/editor.
// Add HTML by using createElement() and appenChild mehtods. (2p)
// Add the following HTML code to the element with id="target"
// *Add class my-item to the second list item

{
    const resultsElm = document.getElementById('target');
    const ulElem = document.createElement('ul');
    resultsElm.append(ulElem);
    {
        const liElem = document.createElement('li');
        liElem.innerText = 'First item';
        ulElem.append(liElem);
    }
    {
        document.getElementById('target');
        const liElem = document.createElement('li');
        document.querySelector('#target').classList.toggle('my-list');
        liElem.innerText = 'Second item';
        ulElem.append(liElem);
    }
    {
        const liElem = document.createElement('li');
        liElem.innerText = 'Third item';
        ulElem.append(liElem);
    }
}