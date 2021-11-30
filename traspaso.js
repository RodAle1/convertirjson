{ /*
    "data": [{
      "type": "articles",
      "id": "1",
      "attributes": {
        "title": "JSON:API paints my bikeshed!",
        "body": "The shortest article. Ever.",
        "created": "2015-05-22T14:56:29.000Z",
        "updated": "2015-05-22T14:56:28.000Z"
      },
      "relationships": {
        "author": {
          "data": {"id": "42", "type": "people"}
        }
      }
    }],
    "included": [
      {
        "type": "people",
        "id": "42",
        "attributes": {
          "name": "John",
          "age": 80,
          "gender": "male"
        }
      }
    ]
  }
*/
  let jd = new Object();
  jd.data = new Array();
  jd.data[0]= new Object();
  jd.data[0].type="aticles";
  jd.data[0].id=1;
  jd.data[0].atributes= new Array();
  jd.data[0].atributes[0].title="JSON:API paints my bikeshed!";
  jd.data[0].atributes[1].body= "The shortest article. Ever.";
  jd.data[0].atributes[2].created="2015-05-22T14:56:29.000Z";
  jd.data[0].atributes[3].update= "2015-05-22T14:56:28.000Z";
  jd.data[0].relationships= new Array();
  jd.data[0].relationships[0].author=new Array();
  jd.data[0].relationships[0].author[0].id=42;
  jd.data[0].relationships[1].author[1].type="people";

  jd.incluided= new Array();
  jd.incluided[1]=type="people";
  jd.incluided[1]=id=42;
  jd.incluided[1].attributes=new Array();
  jd.incluided[1].attributes[0].name="john";
  jd.incluided[1].attributes[1].age=80;
  jd.incluided[1].attributes[2].gender="male";

}
