const secure=document.getElementById('secure')
const private=document.getElementById('private')
const decenter=document.getElementById('decentralized');

secure.addEventListener('click',()=>{
    window.location.href='./table.html?type=secure';
})