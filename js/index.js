const openings = {
  usa: {
    austin: ['General Manager'],
    boston: ['General Manager'],
    chicago: ['Driver Center Manager', 'Driver Partner Lead', 'Growth Marketing Associate', 'Operations Associate', 'Operations Principal', 'Summer Intern', 'Summer MBA Intern'],
    lehi_Utah: ['Billing Specialist', 'Customer Service Operations Manager', 'Customer Service Representative (Night Shift)', 'Customer Service Representative - Dutch Language', 'Customer Service Representative - German Language', 'Customer Service Team Lead', 'Driver Service Representative', 'Driver Service Representative (Night Shift)', 'Member Service Representative', 'Recruiting Principal'],
    los_Angeles: ['General Manager'],
    nyc: ['Accounting Associate', 'Accounts Payable Lead', 'Brand Ambassador', 'B2B Marketing Principal', 'Business Analytics Associate', 'Business Development Associate', 'Business Development Principal', 'Business Operations Principal', 'Communications Associate', 'Compliance Counsel', 'Compliance Principal (Associate)', 'Creative Director', 'Customer Service Business Analyst', 'Customer Service Representative - Dutch Language', 'Customer Service Representative - German Language', 'Data Engineer', 'Data Scientist', 'Driver Partner Lead', 'Expansion Associate', 'Expansion Principal', 'Fraud Analytics Associate', 'Growth Associate', 'Growth Marketing Associate', 'Growth Product Principal', 'IT Systems Specialist', 'Junior Designer', 'Legal Operations Associate', 'Mobility Products Associate', 'Mobility Products Principal', 'Office Manager', 'Operations Associate', 'Operations Associate - Partner Cities', 'Operations Manager - Driver Center', 'Operations Principal', 'Operations System Hacker', 'People Associate', 'Platform Communications Principal', 'Platform Marketing Principal', 'Platform Operations Principal', 'Public Relations Principal', 'Salesforce Administrator', 'Strategic Finance Associate', 'Summer Intern - Business Operations', 'Summer Intern - Data Science', 'Summer Intern - Operations', 'Summer Intern - People Operations', 'Summer MBA Intern', 'Talent Acquisition Coordinator', 'Talent Acquisition Principal', 'Vice President of Business Development', 'Web Designer & Developer'
    ],
    philadelphia: ['General Manager'],
    san_Francisco: ['General Manager'],
    washington_DC: ['Brand Ambassador', 'Director of Policy & Government Affairs', 'Driver Partner Brand Ambassador', 'Driver Partner Lead', 'Operations Associate', 'Operations Principal', 'Summer Intern', 'Summer MBA Intern'],
    west_Sacramento: ['Field Manager']
  },
  china: ['Business Development Associate', 'Business Development Principal'],
  italy: ['ViaVan Country Manager'],
  latin_America: {
    mexico_City: ['General Manager', 'Business Development Director'],
    sao_Paulo: ['General Manager'],
  },
  netherlands: {
    amsterdam: ['Head of Human Resources - Via-Daimler European Joint Venture', 'Head of Legal - Via-Daimler European Joint Venture', 'ViaVan Communications Associate', 'ViaVan Driver Partner Lead', 'ViaVan General Manager', 'ViaVan Intern', 'ViaVan Operations Associate', 'ViaVan Operations Principal']
  },
  arlington: ['Field Manager', 'UTA Brand Ambassador'],
  australia: ['Business Development Director: Australia/New Zealand'],
  germany: {
    berlin: ['Business Development Associate', 'Business Development Principal', 'ViaVan Communications Associate', 'ViaVan Driver Partner Lead', 'ViaVan Fleet Manager', 'ViaVan General Manager', 'ViaVan Intern', 'ViaVan Logistics Associate', 'ViaVan Operations Associate', 'ViaVan Operations Principal']
  },
  england: {
    london: ['Business Development Principal', 'ViaVan Brand Ambassador', 'ViaVan Driver Partner Lead', 'ViaVan Growth Marketing Principal', 'ViaVan Operations Associate', 'ViaVan Operations Principal']
  },
  israel: {
    tel_Aviv: ['Algorithms Researcher', 'Android Developer', 'Cloud Infrastructure Developer', 'Data Engineer', 'Data Scientist', 'DevOps Engineer', 'Dev Team Leader', 'Full Stack Developer', 'Mobile Developer', 'Product Manager', 'Quality Assurance Analyst', 'Senior Front End Engineer']
  },
  canada: {
    toronto: ['General Manager', 'Operations Associate', 'Operations Principal']
  }
};

const countriesList = Object.entries(openings);
const countries = Array.from(document.getElementsByClassName('country'));


countries.forEach(country => {
  country.addEventListener('click', e => {
    const countryClicked = e.target.id;

    const modal = document.getElementById('openings-modal');
    modal.style.display = 'block';
    

    countriesList.forEach(country => {
      let output = '';
      if(countryClicked == country[0]){
        if(Array.isArray(country[1])){
          country[1].map(job => {
            output += `
              <div class="jobs-listings">
                <a href="#" class="jobs-listing">
                  <div class="jobs-listing__title">
                    <strong>${job}</strong>
                  </div>
                </a>
              </div>
            `;
          });
          document.getElementById('openings-modal__wrapper').innerHTML = output;
        } else {
          const cities = Object.entries(country[1]);
          cities.forEach(city => {
            city[1].map(job => {
              output += `
                <div class="jobs-listings">
                  <a href="#" class="jobs-listing">
                    <div class="jobs-listing__title">
                      <strong>${job}</strong>
                    </div>
                    <div class="jobs-listing__location">${formatCityName(city[0])}</div>
                  </a>
                </div>
              `;
            });
            document.getElementById('openings-modal__wrapper').innerHTML = output;
          });
        };
      };
    });
    closeModal(modal);
  });
});

function formatCityName(country) {
  let removeUnderscore = country.split('_').join(' ');
  let capitalize = removeUnderscore.charAt(0).toUpperCase() + removeUnderscore.slice(1);
  return capitalize;
}

function closeModal(modal) {
  document.getElementById('close').onclick = () => modal.style.display = 'none';
  window.onclick = (e) => e.target == this.modal ? modal.style.display = 'none' : modal;
}

