// client side js, Vue je production mode
var app = new Vue({
  el: '#app',
  data: {
    companyName: 'ABC Marketplace',  
    pozdrav: 'Dobar dan u Vue!', // test
    companies: [], // array za prihvat JSON podataka iz baze
    one: '',  // odabrana kompanija
    sendId: '', // šalji id kompanije na drugu stranicu
    drzava: '',
    companyname: '',
    address: '',
    city: '',
    pobox: '',
    valuation: '',
    email: '',
    phone: '',
    put: window.location.pathname  // relativni path stranice  		      
  },
  methods: {
    fetchAll: function() {  // izlistaj sve kompanije
      axios.get('/data')
      .then((res) => {
        // console.log(res.data);
        this.companies = res.data;
      })
      .catch((err) => {
        console.log(err);
      }); 
    },
    newCompany: function() { //unesi novu kompaniju
      axios.post('/nova', { // ne treba sanitize inputs, Axios ima ugrađeno
        f_drzava: this.drzava,
        f_company: this.companyname,
        f_address: this.address,
        f_city: this.city,
        f_pobox: this.pobox,
        f_valuation: this.valuation,
        f_email: this.email,
        f_phone: this.phone
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      this.drzava = ''; // isprazni input placeholdere
      this.companyname = '';
      this.address = '';
      this.city = '';
      this.pobox = '';
      this.valuation = '';
      this.email = '';
      this.phone = '';
      window.location.href = "/";  // nakon slanja podataka redirect na main
    }
  },
  created: function() { // čim se učita Vue pokreni učitavanje iz baze
    this.fetchAll();
  }
})
