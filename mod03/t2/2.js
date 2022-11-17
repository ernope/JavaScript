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
        document.querySelector('#target').appendChild(liElem)
        liElem.innerText = 'First item';

    }
    {
        document.getElementById('target');
        const liElem2 = document.createElement('li');
        document.querySelector('#target').appendChild(liElem2).classList.toggle('my-item');
        liElem2.innerText = 'Second item';

    }
    {
        const liElem = document.createElement('li');
        document.querySelector('#target').appendChild(liElem)
        liElem.innerText = 'Third item';

    }
}
