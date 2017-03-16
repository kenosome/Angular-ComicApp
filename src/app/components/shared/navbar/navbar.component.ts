import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    if(termino.trim()!=''){
      this._router.navigate(['/heroes'],{queryParams:{busqueda:termino}});
    }
    else{
      this._router.navigate(['/heroes']);
    }
    

  }

}
