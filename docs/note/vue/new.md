# hr表格项

## select
```html
<form-item label="招聘渠道" required>
  <el-form-item prop="ehowtoknow">
    <el-select v-model="ruleForm.ehowtoknow" placeholder="请选择">
      <el-option
        v-for="(item,i) in selectOption.ehowtoknow"
        :key="i"
        :label="item.source"
        :value="item.id"
      ></el-option>
    </el-select>  
  </el-form-item>
</form-item>
```

## input
```html
<form-item label="申请职位" required>
  <el-form-item prop="ejob">
    <el-input type="text" v-model="ruleForm.ejob" autocomplete="off"></el-input>
  </el-form-item>
</form-item>
```
```html
<form-item label="姓名" required>
  <el-form-item prop="efirstname">
    <el-input type="text" v-model="ruleForm.efirstname" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item prop="elastname">
    <el-input type="text" v-model="ruleForm.elastname" autocomplete="off"></el-input>
  </el-form-item>
</form-item>
```

## radio
```html
<form-item label="性别" required>
  <el-form-item prop="esex">
    <el-radio-group v-model="ruleForm.esex">
      <el-radio-button label="1">男</el-radio-button>
      <el-radio-button label="2">女</el-radio-button>
    </el-radio-group>
  </el-form-item>
</form-item>
```

## province-city
```html
<form-item label="籍贯" required>
  <province-city
    @provinceCity="provinceCity"
    province="enativepro"
    city="enativecity"
    code="id"
    :province-val="ruleForm.enativepro"
    :city-val="ruleForm.enativecity"
  ></province-city>
</form-item>
```

## date
```html
<form-item label="出生日期" required>
  <el-form-item prop="ebirthdate">
    <el-date-picker v-model="ruleForm.ebirthdate" type="date" placeholder="选择日期"></el-date-picker>
  </el-form-item>
</form-item>
```