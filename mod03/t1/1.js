{
    const resultsElm = document.getElementById('target');
    document.querySelector('#target').classList.toggle('my-list');
    const ulElem = document.createElement('ul');
    resultsElm.append(ulElem);
    {
        const liElem = document.createElement('li');
        liElem.innerText = 'First item';
        ulElem.append(liElem);
    }
    {
        const liElem = document.createElement('li');
        liElem.innerText = 'Second item';
        ulElem.append(liElem);
    }
    {
        const liElem = document.createElement('li');
        liElem.innerText = 'Third item';
        ulElem.append(liElem);
    }
}