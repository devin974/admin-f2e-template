import Vue from 'vue';
import {
  Loading,
  Message,
  MessageBox,
  Popover,
  // Aside,
  // Breadcrumb,
  // BreadcrumbItem,
  // Button,
  // ButtonGroup,
  // Image,
  // Cascader,
  // Col,
  // Container,
  // Checkbox,
  // CheckboxGroup,
  // DatePicker,
  // Dialog,
  // Drawer,
  // Form,
  // FormItem,
  // Header,
  // Icon,
  // Input,
  // Main,
  // Option,
  // Pagination,
  // Radio,
  // RadioButton,
  // RadioGroup,
  // Row,
  // Select,
  // Steps,
  // Step,
  // Table,
  // TableColumn,
  // Tabs,
  // TabPane,
  // Tree,
  // Upload,
  // Popconfirm,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import '@seemusic/sdistro-element-theme/src/index.scss';
// Vue.use(Aside);
// Vue.use(Breadcrumb);
// Vue.use(BreadcrumbItem);
// Vue.use(Button);
// Vue.use(ButtonGroup);
// Vue.use(Popconfirm);
// Vue.use(Checkbox);
// Vue.use(CheckboxGroup);
// Vue.use(Cascader);
// Vue.use(Col);
// Vue.use(Container);
// Vue.use(DatePicker);
// Vue.use(Dialog);
// Vue.use(Drawer);
// Vue.use(Form);
// Vue.use(FormItem);
// Vue.use(Header);
// Vue.use(Icon);
// Vue.use(Image);
// Vue.use(Input);
// Vue.use(Main);
// Vue.use(Option);
// Vue.use(Pagination);
// Vue.use(Radio);
// Vue.use(RadioButton);
// Vue.use(RadioGroup);
// Vue.use(Row);
// Vue.use(Select);
// Vue.use(Steps);
// Vue.use(Step);
// Vue.use(Table);
// Vue.use(TableColumn);
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tree);
// Vue.use(Upload);
Vue.use(Popover);
Vue.use(Loading.directive);

// 不可以同时使用Vue.user(Message) 和 Vue.prototype.$message = Message
// 否则会多次初始化，在调试工具里的表现是多个Root
// 同理还有MessageBox
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
