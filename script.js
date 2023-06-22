const $ = document.querySelectorAll.bind(document);
 $('.total')[0].textContent = [...$('.idade')]
  .map(td => parseInt(td.textContent)) 
  .filter(idade => idade >= 18) 
  .reduce((total, idade) => total + idade, 0);