<template>
  <div class="hello">
    <v-row justify="space-around">
    date du début de la période:
    <v-date-picker v-model="startDate" color="green lighten-1"></v-date-picker>

    date de fin de la période:
    <v-date-picker v-model="endDate" color="green lighten-1"></v-date-picker>
    </v-row>

    <v-row justify="space-around">
      <v-checkbox
              v-model="ci.workingDaysType"
              label="Votre entreprise permet-elle de travailler le samedi ?"
      ></v-checkbox>
    </v-row>

    <v-row justify="space-around">
      <v-col cols="12" sm="6">
      <v-slider
              v-model="ci.unpaidWeeks"
              color="orange"
              label="Nombre de semaines de congé sans solde sur la période"
              min="0"
              max="30"
              thumb-label
      ></v-slider>
      </v-col>
    </v-row>

    <v-row justify="space-around">
      <v-col cols="12" sm="6">
      <v-slider
              v-model="ci.extraUnpaidDays"
              color="orange"
              label="Nombre de jours en plus de ces semaines de congé sans solde sur la période"
              min="0"
              max="20"
              thumb-label
      ></v-slider>
      </v-col>
    </v-row>

    <v-row justify="space-around">

    RESULTAT:
    {{ result }}
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { AppService as CalculatorService } from '@zg2pro-org/calculateur-conges-api/dist/app.service';
import { CalculationInput } from '@zg2pro-org/calculateur-conges-api/dist/calculation-input';
import { inject } from "vue-typescript-inject";
import moment from 'moment';

@Component({
  providers: [CalculatorService]
})
export default class Calculator extends Vue {
  startDate: string = new Date().toISOString().substr(0, 10);
  endDate: string = new Date().toISOString().substr(0, 10);
  ci: CalculationInput = new CalculationInput();
  result: number = 0;

  @inject()//(SERVICE_IDENTIFIER.CALCULATOR)
  private calculatorService!: CalculatorService


  @Watch('startDate')
  @Watch('endDate')
  @Watch('workingDaysType')
  @Watch('extraUnpaidDays')
  @Watch('unpaidWeeks')
  onPropertyChanged(value: string, oldValue: string) {
    let ci = new CalculationInput();
    ci.endDate = moment(this.endDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
    ci.startDate = moment(this.startDate, 'YYYY-MM-DD').format('DD-MM-YYYY');
    this.result = this.calculatorService.calculation(ci);
  }
}
</script>
