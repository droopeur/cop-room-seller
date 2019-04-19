import {Injectable, OnInit} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FichesService {
  private completeFicheList = []
  public filteredFicheList;
  private options = {};

  constructor(private db: AngularFirestore) {
    this.filteredFicheList = new BehaviorSubject([]);
    this.db.collection('fiches', ref => ref.orderBy('date', 'desc'))
      .snapshotChanges().subscribe
    (res => {
        let arr = []
        let doc = res;
        doc.forEach(a => {
          let data = a.payload.doc.data();
          data['objectID'] = a.payload.doc.id
          if (data['date'] && data['date'].seconds) {
            let date = new Date(data['date'].seconds * 1000);
            data['date'] = date
            data['timed_date'] = date.getTime()
          } else {
            let date = new Date(data['date']);
            data['date'] = date
            data['timed_date'] = date.getTime()
          }
          if (data['color']) {
            data['modele'] = data['modele'] + ' ' + data['color']

          }
          arr.push(data)
        });
        this.completeFicheList = arr;
        if (this.options) {
          this.filteredFicheList.next(this.filterList(this.options, this.completeFicheList))
        } else {
          this.filteredFicheList.next(this.completeFicheList)
        }
      }
    )
  }

  changeOptions(index, newOptions) {
    this.options[index] = newOptions;
    this.filteredFicheList.next(this.filterList(this.options, this.completeFicheList))
  }

  filterList(options, list) {
    let initlist = list
    let filterFields = Object.keys(options)
    for (let searchFilter of filterFields) {
      let filterOptions = options[searchFilter]
      console.log(filterOptions)
      if (filterOptions['value'] !== '') {
        initlist = this.makeFilteredList(initlist, filterOptions)
      }
    }
    console.log(filterFields)
    return initlist
  }

  research(x, keys, string) {

    if (keys[0] == 'all') {
      const searchStr = x['nom'] + ' ' + x['prenom'] + ' ' + x['modele'] + ' ' + x['size'] + ' ' + x['price']
      const sstr2 = x['prenom'] + ' ' + x['nom'] + ' ' + x['modele'] + ' ' + x['size'] + ' ' + x['price']
      if (searchStr.toLowerCase().includes(string.toLowerCase()) || sstr2.toLowerCase().includes(string.toLowerCase())) {
        return true
      } else {
        return false

      }
    } if (string == undefined) {
      if (x[keys[0]] == undefined) {
        return true
      }
    } else {
      let searchStr = ''
      for (let key of keys) {
        if (x[key] !== undefined) {
          searchStr = ' ' + x[key]
        }
      }
      if (searchStr.toLowerCase().includes(string.toLowerCase())) {
        return true
      } else {
        return false

      }
    }


  }

  getValueList(field) {
    let list = []
    for (let item of this.completeFicheList) {
      if (item[field] && list.indexOf(item[field]) < 0) {
        list.push(item[field])
      }

    }
    return list
  }

  makeFilteredList(list, filterOptions) {
    let new_list = []
    for (let i = 0; i < list.length; ++i) {
      if (!filterOptions['inverse']) {
        if (filterOptions['type'] == 'number') {
          if( this.researchNumber(list[i],filterOptions['fields'][0], filterOptions['value'])) {
            new_list.push(list[i])

          }
        } else {
          if (this.research(list[i], filterOptions['fields'], filterOptions['value'])) {
            // console.log(x)
            new_list.push(list[i])
          }
        }

      } else {
        if (filterOptions['type'] == 'number') {
        if (!this.researchNumber(list[i], filterOptions['fields'][0], filterOptions['value'])) {
          new_list.push(list[i])

        }} else {
          if (!this.research(list[i], filterOptions['fields'], filterOptions['value'])) {
            // console.log(x)
            new_list.push(list[i])
          }
        }
      }
    }
    return new_list
  }
  researchNumber(x, key, value) {
    const from = value['from'];
    const to = value['to']

      const searchStr = x[key]

      if (from < x[key] && x[key] < to ) {
        return true
      } else {
        return false

      }
  }

  resetFiches() {
    let filterFields = Object.keys(this.options)
    for (let searchFilter of filterFields) {
      let filterOptions = this.options[searchFilter]
      if(filterOptions['type'] != 'search') {
           delete this.options[searchFilter]
      }
    }
this.filteredFicheList.next(this.filterList(this.options,this.completeFicheList))
    }
}
