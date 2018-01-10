Component Libs

Claimed support, but doesnt work
* material-ui@next - [claims support for tree shaking](https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/pages/guides/minimizing-bundle-size.md), but [does not work](https://github.com/facebookincubator/create-react-app/issues/2748) [also](https://github.com/mui-org/material-ui/issues/5533) [https://github.com/mui-org/material-ui/pull/5545](https://github.com/mui-org/material-ui/pull/5545) [https://github.com/webpack/webpack/pull/5435/files](https://github.com/webpack/webpack/pull/5435/files)
* ant-design -[Claims support](https://ant.design/docs/react/introduce), but only when using the [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)
* office-ui-fabric-react - [claims support](https://github.com/OfficeDev/office-ui-fabric-react/blob/b99a5cfa9b3bcb00520f95a639c8cc5181d29381/ghdocs/ADVANCED.md) but does not actually work since they've removed it 
[https://github.com/OfficeDev/office-ui-fabric-react/issues/3230](https://github.com/OfficeDev/office-ui-fabric-react/issues/3230)
[https://github.com/OfficeDev/office-ui-fabric-react/commit/6746103da3c35f95afb1cde1b304a756c550deff](https://github.com/OfficeDev/office-ui-fabric-react/commit/6746103da3c35f95afb1cde1b304a756c550deff)
* palantir/blueprint - no support 
* [atlassian aui-react](https://bitbucket.org/atlassian/aui-react) - no support

* [reactstrap](https://github.com/reactstrap/reactstrap)
* [react-toolbox](https://github.com/react-toolbox/react-toolbox) - doesn't support tree-shaking, but has an interesting node_modules approach