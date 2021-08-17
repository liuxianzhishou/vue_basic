const app=new Vue({
  el: '#app',
  data: {
    shows: [
      {
        id: 1,
        name: '吞佛童子',
        date: '2005',
        price: 1314,
        count: 1
      },
      {
        id: 2,
        name: '阿来',
        date: '2006',
        price: 999,
        count: 1
      },
      {
        id: 3,
        name: '寂寞侯',
        date: '2006',
        price: 520,
        count: 1
      },
      {
        id: 4,
        name: '赦生童子',
        date: '2005',
        price: 66.6,
        count: 1
      }
    ]
  },
  filters: {
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice(){
      res = 0;
      //method 1
      // for(let i in this.shows)
      // {
      //   res += this.shows[i].price * this.shows[i].count;
      // }

      //method 2
      // for(let i of this.shows)
      // {
      //   res += i.price * i.count;
      // }
      // return res;

      //method 3
      return this.shows.reduce(function (preValue,n) {
        return preValue + n.price*n.count;
      },0);
    }
  },
  methods: {
    increment(index){
      this.shows[index].count++
    },
    decrement(index){
      this.shows[index].count--
    },
    removement(index){
      this.shows.splice(index,1)
    },
    //filter/map/reduce练习
    testFun()
    {
      const nums= [21,36,4.5,90.4];
      let total=nums.filter(function (n) {
        return n<30
      }).map(function (n) {
        return n*2
      }).reduce(function (preValue,n) {
        return preValue + n
      }, 0);
      return total
    }
  }
})