
    const pix = 3.141592653589793;
    const radius = 6378.16;
    

    function radians(x) {
      return x * pix / 180;
    }

    function calculateDistance(lat1, long1, lat2, long2) {
      let dlon = radians(long2 - long1);
      let dlat = radians(lat2 - lat1);
    
      let a = (Math.sin(dlat / 2) * Math.sin(dlat / 2)) + Math.cos(radians(lat1)) * Math.cos(radians(lat2)) * (Math.sin(dlon / 2) * Math.sin(dlon / 2));
    
      let angle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return angle * radius;
    }
    // top 50 places of israel.

    let places = [{
      "name": "Tel-Aviv",
      "message": "city is blablabla",
      "lat": 32.083333,
      "long": 34.7999968
    }, {
      "name": "Haifa",
      "message": "city is blablabla",
      "lat": 32.81841,
      "long": 34.9885  
    }, {
      "name": "Rehovot",
      "message": "city is blablabla",
      "lat": 31.894756,
      "long": 34.809322
    },{
      "name": "Afula",
      "message": "city is blablabla",
      "lat": 32.610193,
      "long": 35.288435
    },{
      "name": "Akko",
      "message": "city is blablabla",
      "lat": 32.932706,
      "long": 35.082528
    },{
      "name": "Ashdod",
      "message": "city is blablabla",
      "lat": 31.801033,
      "long": 34.650113
    },{
      "name": "Ashqelon",
      "message": "city is blablabla",
      "lat": 31.666424,
      "long": 34.569805
    },{
      "name": "Bat Yam",
      "message": "city is blablabla",
      "lat": 32.012078,
      "long": 34.746822
    },{
      "name": "Beersheba",
      "message": "city is blablabla",
      "lat": 31.250087,
      "long": 34.791477
    },{
      "name": "Bené Beraq",
      "message": "city is blablabla",
      "lat": 32.08074,
      "long": 34.8338
    },{
      "name": "Bet Shemesh",
      "message": "city is blablabla",
      "lat": 31.746728,
      "long": 34.987918
    },{
      "name": "Dimona",
      "message": "city is blablabla",
      "lat": 31.068567,
      "long": 35.033997
    },{
      "name": "Eilat",
      "message": "city is blablabla",
      "lat": 29.558713,
      "long": 34.954761
    },{
      "name": "Taiyiba",
      "message": "city is blablabla",
      "lat": 32.26616,
      "long": 35.00893
    },{
      "name": "Givatayim",
      "message": "city is blablabla",
      "lat": 32.07225,
      "long": 34.81253
    },{
      "name": "Hadera",
      "message": "city is blablabla",
      "lat": 32.432832,
      "long": 34.919051
    },{
      "name": "Herzliyya",
      "message": "city is blablabla",
      "lat": 32.159280,
      "long": 34.837521
    },{
      "name": "Hod HaSharon",
      "message": "city is blablabla",
      "lat": 32.15934,
      "long": 34.8932
    },{
      "name": "Holon",
      "message": "city is blablabla",
      "lat": 32.01034,
      "long": 34.77918
    },{
      "name": "Jerusalem",
      "message": "city is blablabla",
      "lat": 31.76904,
      "long": 35.21633
    },{
      "name": "Karmiel",
      "message": "city is blablabla",
      "lat": 32.91708,
      "long": 35.30501
    },{
      "name": "Kfar Saba",
      "message": "city is blablabla",
      "lat": 32.175,
      "long": 34.90694
    },{
      "name": "Lod",
      "message": "city is blablabla",
      "lat": 31.9467,
      "long": 34.8903
    },{
      "name": "Modiin",
      "message": "city is blablabla",
      "lat": 31.89825,
      "long": 35.01051
    },{
      "name": "Nahariya",
      "message": "city is blablabla",
      "lat": 33.01135,
      "long": 35.09467
    },{
      "name": "Nazareth",
      "message": "city is blablabla",
      "lat": 32.69925,
      "long": 35.30483
    },{
      "name": "Ness Ziona",
      "message": "city is blablabla",
      "lat": 31.92933,
      "long": 34.79868
    },{
      "name": "Netanya",
      "message": "city is blablabla",
      "lat": 32.33291,
      "long": 34.85992
    },{
      "name": "Or Yehuda",
      "message": "city is blablabla",
      "lat": 32.02923,
      "long": 34.85788
    },{
      "name": "Petah Tiqwa,",
      "message": "city is blablabla",
      "lat": 32.08707,
      "long": 34.88747
    },{
      "name": "Qiryat Ata",
      "message": "city is blablabla",
      "lat": 32.81149,
      "long": 35.11323
    },{
      "name": "Qiryat Bialik",
      "message": "city is blablabla",
      "lat": 32.8275,
      "long": 35.08583
    },{
      "name": "Qiryat Gat",
      "message": "city is blablabla",
      "lat": 31.60998,
      "long": 34.76422
    },{
      "name": "Qiryat Mozqin",
      "message": "city is blablabla",
      "lat": 31.801033,
      "long": 34.650113
    },{
      "name": "Ashdod",
      "message": "city is blablabla",
      "lat": 32.83706,
      "long": 35.0776
    },{
      "name": "Qiryat Yam",
      "message": "city is blablabla",
      "lat": 32.84966,
      "long": 35.06973
    },{
      "name": "Ra'anana",
      "message": "city is blablabla",
      "lat": 32.1836,
      "long": 34.87386
    },{
      "name": "Ramat Gan",
      "message": "city is blablabla",
      "lat": 32.08227,
      "long": 34.81065
    },{
      "name": "Ramat HaSharon",
      "message": "city is blablabla",
      "lat": 32.14613,
      "long": 34.8394
    },{
      "name": "Ramla",
      "message": "city is blablabla",
      "lat": 31.92923,
      "long": 34.86563
    },{
      "name": "Rishon LeZiyyon",
      "message": "city is blablabla",
      "lat": 31.97102,
      "long": 34.78939
    },{
      "name": "Rosh Ha‘Ayin",
      "message": "city is blablabla",
      "lat": 32.09556,
      "long": 34.95664
    },{
      "name": "Safed",
      "message": "city is blablabla",
      "lat": 32.96465,
      "long": 35.496
    },{
      "name": "Tamra",
      "message": "city is blablabla",
      "lat": 32.85301,
      "long": 35.1987
    },{
      "name": "Tiberias",
      "message": "city is blablabla",
      "lat": 32.79221,
      "long": 35.53124
    },{
      "name": "Umm el Fahm",
      "message": "city is blablabla",
      "lat": 32.51725,
      "long": 35.15349
    },{
      "name": "Yafo",
      "message": "city is blablabla",
      "lat": 32.05043,
      "long": 34.75224
    },{
      "name": "Yavne",
      "message": "city is blablabla",
      "lat": 31.88078,
      "long": 34.73843
    },{
      "name": "Yehud",
      "message":"city is blablabla",
      "lat": "31.88078",
      "long": "34.73843"
    }]

    function getDistance(lat,long) {

      let result = [];
      places.forEach((x) => {
        let resultDistance = calculateDistance(lat, long , x.lat, x.long)
        let obj = {
          "city": x.name,
          "message": x.message,
          "lat": x.lat,
          "long": x.long,
          "distance": resultDistance
        }
    
        result.push(obj);
      })
    
      // shortest first
      result.sort((a, b) => {
        return a.distance - b.distance
      })
      document.getElementById("valueInsert").innerHTML = result[0].city + "<br>" + result[0].message;
    }