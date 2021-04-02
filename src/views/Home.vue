<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <div v-if="SelectedDomain && SelectedTheme">
          {{SelectedDomain}}, {{SelectedTheme}} ({{remarks.length}})<br/>
          <br/>
          <div v-for="(remark, i) in remarks" :key="i">{{remark.remarks}}</div>
        </div>
      </v-col>
      <v-col cols="4">
        Top Domains (<span v-if="SelectedTheme && SelectedFirst === 'theme'">{{SelectedTheme}}</span><span v-else>ALL</span>)
        <PieChart :ChartData="DomainsChartData" :ParentCallbacks="DomainCallbacks"/>
        <v-btn @click="onResetFilter">Reset</v-btn>
      </v-col>
      <v-col cols="4">
        Top Themes (<span v-if="SelectedDomain && SelectedFirst === 'domain'">{{SelectedDomain}}</span><span v-else>ALL</span>)
        <PieChart :ChartData="ThemesChartData" :ParentName="SelectedDomain" :ParentCallbacks="ThemeCallbacks"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import PieChart from '@/components/PieChart.vue'
import CsvData from '../csv'

export default {
  name: 'Home',
  components: {
    PieChart
  },
  data() {
    return {
      ParsedData: [],
      GroupByDomain: {},
      ByDomainSorted: [],
      GroupByTheme: {},
      DomainCallbacks: {
        onSelectPie: this.onDomainSelectPie,
      },
      ThemeCallbacks: {
        onSelectPie: this.onThemeSelectPie,
      },
      DomainsChartData: {},
      ThemesChartData: {},
      SelectedDomain: '',
      SelectedTheme: '',
      SelectedFirst: '',
    }
  },
  mounted() {
    this.ParsedData = this.parseCsv()
    this.GroupByDomain = this.groupByColumn(this.ParsedData, 'domain', 'theme')
    this.updateDomainChart()

    this.GroupByTheme = this.groupByColumn(this.ParsedData, 'theme', 'domain')
    this.updateThemeChart()
    console.log()
  },
  computed: {
    remarks() {
      if (!this.SelectedTheme || !this.SelectedDomain) {
        return []
      }
      // else: theme and domain set
      let ret = this.ParsedData.filter((item) => {
        return item.theme === this.SelectedTheme && item.domain === this.SelectedDomain
      })
      console.log(ret)
      return ret 
    }
  },
  methods: {
    onResetFilter() {
      this.SelectedFirst = ''
      this.SelectedDomain = ''
      this.SelectedTheme = ''

      this.GroupByDomain = this.groupByColumn(this.ParsedData, 'domain', 'theme')
      this.updateDomainChart()

      this.GroupByTheme = this.groupByColumn(this.ParsedData, 'theme', 'domain')
      this.updateThemeChart()
    },
    asChartData(SrcData) {
      let ret = {
        labels: SrcData.map((item => {
          return item.key
        })),
        datasets: [{
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16',
            '#DDB851',
          ],
          data: SrcData.map((item => {
            return item.data.count
          }))
        }],
      }

      return ret
    },
    updateDomainChart() {
      this.ByDomainSorted = this.getSorted(this.GroupByDomain, 5)
      this.DomainsChartData = this.asChartData(this.ByDomainSorted)
    },
    updateThemeChart() {
      this.ByThemeSorted = this.getSorted(this.GroupByTheme, 5)
      this.ThemesChartData = this.asChartData(this.ByThemeSorted)
    },
    onThemeSelectPie(idx) {
      this.SelectedTheme = this.ByThemeSorted[idx].key
      if (!this.SelectedFirst) {
        this.SelectedFirst = 'theme'
      }
      if (this.SelectedFirst === 'theme') {
        // filter domains by theme
        this.SelectedFirst = 'theme'
        let FilteredData = this.ParsedData.filter((item) => {
          // console.log(item.domain)
          return item.theme === this.SelectedTheme
        })
        this.GroupByDomain = this.groupByColumn(FilteredData, 'domain', 'theme')
        this.updateDomainChart()
      }
    },
    onDomainSelectPie(idx) {
      this.SelectedDomain = this.ByDomainSorted[idx].key
      if (!this.SelectedFirst) {
        this.SelectedFirst = 'domain'
      }
      if (this.SelectedFirst === 'domain') {
        // filter themes by domain
        let FilteredData = this.ParsedData.filter((item) => {
          // console.log(item.domain)
          return item.domain === this.SelectedDomain
        })
        console.log(FilteredData)
        // console.log(this.getSorted(this.groupByColumn(FilteredData, 'theme', 'theme'), 0))
        this.GroupByTheme = this.groupByColumn(FilteredData, 'theme', 'theme')
        this.updateThemeChart()
      }
      // if (this.SelectedTheme) {
      //   return
      // }
    },
    getSorted(data, MaxCells) {
      let ret = []
      Object.keys(data).forEach((key) => {
        // console.log(`${key}: ${data[key].count}`)
        ret.push({
          key: key,
          data: data[key],
        })
      })

      ret = ret.sort((a,b) => {
        return b.data.count - a.data.count
      })

      if (MaxCells && ret.length > MaxCells) {
        let others = ret.splice(MaxCells)
        ret.push(others.reduce((ret, ThisItem) => {
          ret.data.count += ThisItem.data.count
          return ret
        }, {
          key: 'Others',
          data: {
            count: 0
          }
        }))
      }
      return ret
    },
    groupByColumn(DataAry, KeyName, ValueName) {
      return DataAry.reduce((ret, ThisSet) => {
        let key = ThisSet[KeyName]
        if (!(key in ret)) {
          ret[key] = {
            count: 0,
            RelatedTo: [],
          }
        }
        ret[key].count++
        if (!ret[key].RelatedTo.includes(ThisSet[ValueName])) {
          ret[key].RelatedTo.push(ThisSet[ValueName])
        }
        return ret
      }, {})
    },
    parseCsv() {
      let ret = []
      // console.log(CsvData)
      CsvData.data.split('\n').forEach(line => {
        // console.log(line)
        let matches = line.match(/^(.+?),(.+?),(.+?),(.*)/)
        if (matches) {
          ret.push({
            org: matches[1],
            domain: matches[2],
            theme: matches[3],
            remarks: matches[4],
          })    
        }
      })

      return ret
    },
  }
}
</script>
