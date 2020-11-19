let INPUT = {
    // Strings
    nameFirst: '.nameFirst',
    nameLast: '.nameLast',
    addressStreet: '.addressStreet',
    addressUnit: '.addressUnit',
    addressState: '.addressState',
    addressCity: '.addressCity',
    addressZip: '.addressZip',
    addressPhone: '.addressPhone',
    addressEmail: '.addressEmail',
  
    // Earthquake Input Data
    quoteDwelling: '.dwellingAmount',
    quoteType: '.dwellingType',
    quoteFoundation: '.dwellingFoundation',
    quoteConstruction: '.dwellingConstruction',
    quoteFamilies: '.dwellingFamilies',
    quoteLevels: '.dwellingLevels',
    quoteFootage: '.dwellingFootage',
    quoteYear: '.dwellingYear',
    quoteDamageYes: '.damageYes',
    quoteDamageNo: '.damageNo',
    dwellingCarrier: '.dwellingCarrier',
    dwellingHomeCoverage: '.dwellingHomeCoverage',
    dwellingStructures: '.dwellingStructures',
    dwellingContents: '.dwellingContents',
    // Submit Button
  
    next: '.next',
    previous: '.previous',
    submit: '.finish'
  }
  
  // Query Selector Elements
  let nF = document.querySelector(INPUT.nameFirst);
  let nL = document.querySelector(INPUT.nameLast);
  let street = document.querySelector(INPUT.addressStreet);
  // let unit = document.querySelector(INPUT.addressUnit);
  let state = document.querySelector(INPUT.addressState);
  let city = document.querySelector(INPUT.addressCity);
  let zip = document.querySelector(INPUT.addressZip);
  // let phone = document.querySelector(INPUT.addressPhone);
  let email = document.querySelector(INPUT.addressEmail);
  
  // Query Selector Elements for Earthquake Data
  let dwelling = document.querySelector(INPUT.quoteDwelling);
  let type = document.querySelectorAll(INPUT.quoteType);
  let foundation = document.querySelectorAll(INPUT.quoteFoundation);
  let construction = document.querySelectorAll(INPUT.quoteConstruction);
  let families = document.querySelectorAll(INPUT.quoteFamilies);
  let levels = document.querySelectorAll(INPUT.quoteLevels);
  let footage = document.querySelector(INPUT.quoteFootage);
  let year = document.querySelector(INPUT.quoteYear);
  // let yes = document.querySelector(INPUT.quoteDamageYes);
  // let no = document.querySelector(INPUT.quoteDamageNo);
  let carrier = document.querySelector(INPUT.dwellingCarrier);
  let coverage = document.querySelector(INPUT.dwellingHomeCoverage);
  // let structures = document.querySelector(INPUT.dwellingStructures);
  // let contents = document.querySelector(INPUT.dwellingContents);
  
  // Query selector Elements for buttons
  let nextBtn = document.querySelectorAll(INPUT.next);
  let previousBtn = document.querySelectorAll(INPUT.previous);
  let submit = document.querySelector(INPUT.submit);
  
  // Validation functions for fields
          function validateNames(name) {
          name.classList.remove('error__iput');
          if((isNaN(name.value)) && (name.value.length > 5 || name.value.length < 15)) {
              name.classList.add('success__input');
              name.classList.remove('error__input');
              return true;
          } else {
              name.classList.add('error__input');
              name.classList.remove('success__input');
              return false;
          }
      }
    
      
            // Validate Phone Number
            /*
              function validatePhone(p) {
              let regexp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
              if(regexp.test(p.value)) {
                  p.classList.add('success__input');
                  p.classList.remove('error__input');
                  return true;
              } else {
                  p.classList.add('error__input');
                  p.classList.remove('success__input');
                  return false;
              }
          }
          */
    
      
        // Validate Email Address
        function validateEmail(e) {
          let regexp = 	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(regexp.test(e.value)) {
              e.classList.add('success__input');
              e.classList.remove('error__input');
              return true;
          } else {
              e.classList.add('error__input');
              e.classList.remove('success__input');
              return false;
  }
  }
  
  let validateAddress = (s) => {
    if(s.value !== null && s.value !== '') {
        s.classList.add('success__input');
        s.classList.remove('error__input');
        return true;
    } else {
        s.classList.add('error__input');
        s.classList.remove('success__input');
        return false;
    }
  }
  
  // Validate US Zip Code
  let validateZip = (z) => {
    let regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if(regexp.test(z.value)) {
        z.classList.add('success__input');
        z.classList.remove('error__input');
        return true;
    } else {
        z.classList.add('error__input');
        z.classList.remove('success__input');
        return false;
    }
  }
  
  // Validate Dwelling Amount
  let validateDwelling = (d) => {
    let n = d.value.replace("[$,]", "");
    if(n !== '' && (n >= 75000 && n <= 150000000)){
        d.classList.add('success__input');
        d.classList.remove('error__input');
        return true;
    } else {
        d.classList.add('error__input');
        d.classList.remove('success__input');
        return false;
    }
  }
  
  // Validate Dwelling Type
  let validateDropDowns = (t) => {
    for(let i = 0; i < t.length; i++) {
        if(t[i].value !== 'none') {
            t[i].classList.add('success__input');
            t[i].classList.remove('error__input');
            return true;
        } else {
            t[i].classList.add('error__input');
            t[i].classList.remove('success__input');
            return false;
        }
    }
  }
  
  // Validate Square Footage
  let validateFootageYear = (f) => {
    if(!isNaN(f.value) && f.value !== '') {
        f.classList.add('success__input');
        f.classList.remove('error__input');
        return true;
    } else {
        f.classList.add('error__input');
        f.classList.remove('success__input');
        return false;
    }
  }
  
  // Validate prior damage radio buttons
  /*
  let validateDamage = () => {
    let result = document.querySelector('.dwellingDamageText');
    if(yes.checked === true || no.checked === true) {
        result.innerHTML = '';
        return true;
    } else {
        result.innerHTML = 'You must select an option in order to proceed';
        result.style.color = '#980000';
        return false;
    }
  }
  */
  // Validate Carrier for current home
  let validateCCarrier = (c) => {
    if(isNaN(c.value) && c.value !== '') {
        c.classList.add('success__input');
        c.classList.remove('error__input');
        return true;
    } else {
        c.classList.add('error__input');
        c.classList.remove('success__input');
        return false;
    }
  }
  
  // Validate Coverage for current home
  let validateCCoverage = (c) => {
    if(!isNaN(c.value) && c.value !== '') {
        c.classList.add('success__input');
        c.classList.remove('error__input');
        return true;
    } else {
        c.classList.add('error__input');
        c.classList.remove('success__input');
        return false;
    }
  }
  
  // Loop through 'NEXT' buttons in all tabs to indicate paginantion and show current tab!
  let paginateTabs = (next, previous) => { // n = next && p = previous function
  let tabs = document.querySelectorAll('.tab');
  for(let i = 0; i < tabs.length; i++) {
    // Display the first tab on initialization
    tabs[i].style.display = 'none';
    tabs[0].style.display = 'block';
  
  
    previous[1].addEventListener('click', function() {
      tabs[0].style.display = 'block';
      tabs[1].style.display = 'none';
    })
  
    previous[2].addEventListener('click', function() {
      tabs[1].style.display = 'block';
      tabs[2].style.display = 'none';
    })
  
    previous[3].addEventListener('click', function() {
      tabs[2].style.display = 'block';
      tabs[3].style.display = 'none';
    })
  
    previous[4].addEventListener('click', function() {
      tabs[3].style.display = 'block';
      tabs[4].style.display = 'none';
    })
  
    previous[5].addEventListener('click', function() {
      tabs[4].style.display = 'block';
      tabs[5].style.display = 'none';
    })
  
  
      next[0].addEventListener('click', function() {
        validateNames(nF);
        validateNames(nL);
        // validatePhone(phone);
        validateEmail(email);
        if(validateNames(nF) === true && validateNames(nL) === true && validateEmail(email) === true) {
          tabs[0].style.display = 'none';
          tabs[1].style.display = 'block';
  }
      });
      next[1].addEventListener('click', function() {
        validateAddress(street);
        // validateAddress(unit);
        validateAddress(state)
        validateAddress(city);
        validateZip(zip);
        if(validateAddress(street) === true && validateAddress(state) === true && validateAddress(city) === true && validateZip(zip) === true) {
          tabs[0].style.display = 'none';
          tabs[1].style.display = 'none';
          tabs[2].style.display = 'block';
        }
      })
      next[2].addEventListener('click', function() {
        validateDwelling(dwelling);
        validateDropDowns(type);
        // validateFootageYear(structures);
        // validateFootageYear(contents);
        if(validateDwelling(dwelling) === true && validateDropDowns(type) === true) {
          tabs[0].style.display = 'none';
          tabs[1].style.display = 'none';
          tabs[2].style.display = 'none';
          tabs[3].style.display = 'block';
        }
      })
      next[3].addEventListener('click', function() {
        validateDropDowns(foundation);
        // Construction Type
        validateDropDowns(construction);
        // Number of Families
        validateDropDowns(families);
        // Number of Levels
        validateDropDowns(levels);
        if(validateDropDowns(foundation) === true && validateDropDowns(construction) === true && validateDropDowns(families) === true && validateDropDowns(levels) === true) {
          tabs[0].style.display = 'none';
          tabs[1].style.display = 'none';
          tabs[2].style.display = 'none';
          tabs[3].style.display = 'none';
          tabs[4].style.display = 'block';      
        }
      })
      next[4].addEventListener('click', function() {
        validateFootageYear(footage);
        // Square Footage & Year
        validateFootageYear(year);
        if(validateFootageYear(footage) === true && validateFootageYear(year) === true) {
          tabs[0].style.display = 'none';
          tabs[1].style.display = 'none';
          tabs[2].style.display = 'none';
          tabs[3].style.display = 'none';
          tabs[4].style.display = 'none';
          tabs[5].style.display = 'block';    
        }
      })
      submit.addEventListener('click', function(e) {
        if(validateCCarrier(carrier) === true && validateCCoverage(coverage) === true) {
          return true;
        } else {
          e.preventDefault();
          validateCCarrier(carrier);
          validateCCoverage(coverage);
          return false;
        }
      })
    }
  }
  
  
  paginateTabs(nextBtn, previousBtn);