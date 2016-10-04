import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})

export class Alerts {
  testRadioOpen: boolean;
  testCheckboxOpen: boolean;
  testRadioResult;
  testCheckboxResult;

  constructor(public alerCtrl: AlertController) { }

  // Basic Alert
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Novo amigo!',
      message: 'Seu amigo, Obi wan Kenobi, aprovou sua solicitação de amizade!',
      buttons: ['Ok']
    });
    alert.present()
  }

  // Prompt Alert
  doPrompt() {
    let prompt = this.alerCtrl.create({
      title: 'Novo álbum',
      message: "Digite um nome para este novo álbum que você está adicionando",
      inputs: [
        {
          name: 'titulo',
          placeholder: 'Titulo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  // Confirm Alert
  doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Uso do sabre de luz',
      message: 'Você concorda em usar este sabre de luz para fazer o bem por toda a galáxia?',
      buttons: [
        {
          text: 'Concordo',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Não concordo',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

  // Radio Alert
  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Selecione a cor do sabre de luz');

    alert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'azul',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'verde'
    });

    alert.addInput({
      type: 'radio',
      label: 'Vermelho',
      value: 'vermelho'
    });

    alert.addInput({
      type: 'radio',
      label: 'Amarelo',
      value: 'amarelo'
    });

    alert.addInput({
      type: 'radio',
      label: 'Roxo',
      value: 'roxo'
    });

    alert.addInput({
      type: 'radio',
      label: 'Branco',
      value: 'branco'
    });

    alert.addInput({
      type: 'radio',
      label: 'Preto',
      value: 'preto'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  // Checkbox Alert
  doCheckbox() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Quais planetas você já visitou?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Coruscant',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Endor',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Hoth',
      value: 'value5'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Jakku',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Naboo',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Takodana',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Tatooine',
      value: 'value6'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}
