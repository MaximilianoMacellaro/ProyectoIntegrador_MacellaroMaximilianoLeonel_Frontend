import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
nombre: string;
porcentaje: number;
constructor(private skills: SkillService, private router: Router) {}

onCreate(): void{
const skill = new Skill(this.nombre, this.porcentaje);
this.skills.save(skill).subscribe(
  data => {
    alert("Skill creada correctamente")
    this.router.navigate(['']);
  }, err => {
    alert("Fallo al añadir la skill");
    this.router.navigate(['']);
  }
)
}

}


