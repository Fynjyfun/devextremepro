// var options = {

// }

var cities = [
  { id: 0,
    name: "San Jose"
  },
  { id: 1,
    name: "St. Louis"
  },
  { id: 2,
    name: "Little Rock"
  },
  { id: 3,
    name: "San Diego"
  },
  { id: 4,
    name: "Beaver"
  },
  { id: 5,
    name: "Boise"
  },
  { id: 6,
    name: "Atlanta"
  },
  { id: 7,
    name: "Bentonville"
  },
  { id: 8,
    name: "Los Angeles"
  }
]
var states = [
  { id: 0,
    name: "Georgia"
  },
  { id: 1,
    name: "Idaho"
  },
  { id: 2,
    name: "Utah"
  },
  { id: 3,
    name: "Arkansas"
  },
  { id: 4,
    name: "Missouri"
  },
  { id: 5,
    name: "Californiaefkgjdhfkdjhrkjertkerjghkdufghkerjtdjfhgkeurhgkdjfhfgdivskdfnglk"
  }
]
// var match = [
//   [6],
//   [5],
//   [4],
//   [2, 7],
//   [1],
//   [0, 3, 8]
// ]

export const datadata = {
  // opt: {},
  col: [{
    caption: "Employee",
    width: 230,
    fixed: true,
    calculateCellValue: function(data) {
        return [data.Title,
            data.FirstName, data.LastName]
            .join(" ");
    }
}, {
    dataField: "BirthDate",
    dataType: "date"
}, {
    dataField: "HireDate",
    dataType: "date"
}, {
    dataField: "Position",
    alignment: "right",
}, {
    dataField: "Address",
    width: 230,
},
{dataField: "StateID",
//showEditorAlways: "true",
lookup: {
  dataSource: states,
  valueExpr: "id",
  displayExpr: "name"
}
},
{dataField: "CityID",
//showEditorAlways: "true",
lookup: {
  dataSource: cities,
  valueExpr: "id",
  displayExpr: "name"
}
},
 {
    dataField: "Zipcode",
    visible: false
}, "HomePhone", "MobilePhone", "Skype", "Email",
{
  dataField: "checked",
  dataType: "boolean"
}],
  data: [{
    "ID": 1,
    "FirstName": "John",
    "LastName": "Heart",
    "Position": "CEO",
    "BirthDate": "1964/03/16",
    "HireDate": "1995/01/15",
    "Title": "Mr.",
    "Address": "351 S Hill St.",
    "CityID": 8,
    "StateID": 5,
    "Zipcode": 90013,
    "Email": "jheart@dx-email.com",
    "Skype": "jheartDXskype",
    "HomePhone": "(213) 555-9208",
    "DepartmentID": 6,
    "MobilePhone": "(213) 555-9392",
    "checked": false
},{
    "ID": 2,
    "FirstName": "Olivia",
    "LastName": "Peyton",
    "Position": "Sales Assistant",
    "BirthDate": "1981/06/03",
    "HireDate": "2012/05/14",
    "Title": "Mrs.",
    "Address": "807 W Paseo Del Mar",
    "CityID": 8,
    "StateID": 5,
    "Zipcode": 90036,
    "Email": "oliviap@dx-email.com",
    "Skype": "oliviapDXskype",
    "HomePhone": "(310) 555-2728",
    "DepartmentID": 5,
    "MobilePhone": "(818) 555-2387",
    "checked": true
}, {
    "ID": 3,
    "FirstName": "Robert",
    "LastName": "Reagan",
    "Position": "CMO",
    "BirthDate": "1974/09/07",
    "HireDate": "2002/11/08",
    "Title": "Mr.",
    "Address": "4 Westmoreland Pl.",
    "CityID": 7,
    "StateID": 3,
    "Zipcode": 91103,
    "Email": "robertr@dx-email.com",
    "Skype": "robertrDXskype",
    "HomePhone": "(818) 555-2438",
    "DepartmentID": 6,
    "MobilePhone": "(818) 555-2387",
    "checked": false
}, {
    "ID": 4,
    "FirstName": "Greta",
    "LastName": "Sims",
    "Position": "HR Manager",
    "BirthDate": "1977/11/22",
    "HireDate": "1998/04/23",
    "Title": "Ms.",
    "Address": "1700 S Grandview Dr.",
    "StateID": 0,
    "CityID": 6,
    "Zipcode": 91803,
    "Email": "gretas@dx-email.com",
    "Skype": "gretasDXskype",
    "HomePhone": "(818) 555-0976",
    "DepartmentID": 5,
    "MobilePhone": "(818) 555-6546",
    "checked": true
}, {
    "ID": 5,
    "FirstName": "Brett",
    "LastName": "Wade",
    "Position": "IT Manager",
    "BirthDate": "1968/12/01",
    "HireDate": "2009/03/06",
    "Title": "Mr.",
    "Address": "1120 Old Mill Rd.",
    "StateID": 1,
    "CityID": 5,
    "Zipcode": 91108,
    "Email": "brettw@dx-email.com",
    "Skype": "brettwDXskype",
    "HomePhone": "(626) 555-5985",
    "DepartmentID": 7,
    "MobilePhone": "(626) 555-0358",
    "checked": true
}, {
    "ID": 6,
    "FirstName": "Sandra",
    "LastName": "Johnson",
    "Position": "Controller",
    "BirthDate": "1974/11/15",
    "HireDate": "2005/05/11",
    "Title": "Mrs.",
    "Address": "4600 N Virginia Rd.",
    "StateID": 2,
    "CityID": 4,
    "Zipcode": 90807,
    "Email": "sandraj@dx-email.com",
    "Skype": "sandrajDXskype",
    "HomePhone": "(562) 555-8272",
    "DepartmentID": 5,
    "MobilePhone": "(562) 555-2082",
    "checked": true
}, {
    "ID": 7,
    "FirstName": "Kevin",
    "LastName": "Carter",
    "Position": "Shipping Manager",
    "BirthDate": "1978/01/09",
    "HireDate": "2009/08/11",
    "Title": "Mr.",
    "Address": "424 N Main St.",
    "StateID": 5,
    "CityID": 3,
    "Zipcode": 90012,
    "Email": "kevinc@dx-email.com",
    "Skype": "kevincDXskype",
    "HomePhone": "(213) 555-8038",
    "DepartmentID": 3,
    "MobilePhone": "(213) 555-2840",
    "checked": true
}, {
    "ID": 8,
    "FirstName": "Cynthia",
    "LastName": "Stanwick",
    "Position": "HR Assistant",
    "BirthDate": "1985/06/05",
    "HireDate": "2008/03/24",
    "Title": "Ms.",
    "Address": "2211 Bonita Dr.",
    "CityID": 2,
    "StateID": 3,
    "Zipcode": 90265,
    "Email": "cindys@dx-email.com",
    "Skype": "cindysDXskype",
    "HomePhone": "(818) 555-6808",
    "DepartmentID": 4,
    "MobilePhone": "(818) 555-6655",
    "checked": true
}, {
    "ID": 9,
    "FirstName": "Kent",
    "LastName": "Samuelson",
    "Position": "Ombudsman",
    "BirthDate": "1972/09/11",
    "HireDate": "2009/04/22",
    "Title": "Dr.",
    "Address": "12100 Mora Dr",
    "CityID": 1,
    "StateID": 4,
    "Zipcode": 90272,
    "Email": "kents@dx-email.com",
    "Skype": "kentsDXskype",
    "HomePhone": "(562) 555-1328",
    "DepartmentID": 26,
    "MobilePhone": "(562) 555-9282",
    "checked": true
}, {
    "ID": 10,
    "FirstName": "Taylor",
    "LastName": "Riley",
    "Position": "Network Admin",
    "BirthDate": "1982/08/14",
    "HireDate": "2012/04/14",
    "Title": "Mr.",
    "Address": "7776 Torreyson Dr",
    "CityID": 0,
    "StateID": 5,
    "Zipcode": 90012,
    "Email": "taylorr@dx-email.com",
    "Skype": "taylorrDXskype",
    "HomePhone": "(310) 555-9712",
    "DepartmentID": 5,
    "MobilePhone": "(310) 555-7276",
    "checked": true
}]
}
