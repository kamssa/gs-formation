import { Component, OnInit } from '@angular/core';
import {FormationsService} from '../../services/formations/formations.service';
import {CategorieService} from '../../services/categories/categorie.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  data: any = [];
  data2: any = [];
  public tabIndex: any =[];
  public ff: any ;
  allCategories: any;
  allFormations: any;
  categories:any = [];
  categorieId: number;
  categorieLibelle:string;
  formations: any;
  categorie: any;
  ll: any = [];
  cc:any;
  constructor(private formationsService: FormationsService, private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.getCate();
  }
  getCate(){
    this.categorieService.getAllCategorie().subscribe((element) => {
      this.categories = element['body'];
      console.log(this.categories);
      this.categories.forEach(res => {
        this.formationsService.getFormationByIdCategorie(res.id).subscribe(data => {
          this.data.push({
            categorie: res.libelle,
            //formations:this.cc
          });
          //console.log(this.data);
        })
      });
    })
    /*     this.categorieService.getCategories().subscribe((element)=>{
          this.categories= element['body'];
          this.categories.forEach(res => {
            this.ll = res.libelle;
            this.formationsService.getFormationByIdCategorie(res.id).subscribe(data =>{
              this.cc = [];
              for (const [index,iterator] of data['body1'].entries()) {
                this.tabIndex.push(index);
                this.cc.push(iterator.libelle);
              }
              this.data.push({
                categorie:res.libelle,
                formations:this.cc
              });
            })
            console.log(this.data);
          });
        }); */
  }
}
