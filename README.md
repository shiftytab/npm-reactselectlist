# About this package

This package allows you to set up a dropdown selection list in React. Below, you will find all the options related to the component and how to install it in your project.
## Installation
Follow these steps to install the package:

#### NPM
```bash
  npm i @shiftytab/reactselectlist
```

#### YARN
```bash
  yarn add @shiftytab/reactselectlist
```

## Deployment

Once you have installed the package, simply import it into your project.

```bash
import SelectList from '@shiftytab/reactselectlist';
```

```JSX
<SelectList 
    options={[
        {
            "value": "Test 1"
        },
        {
            "value": "Test 2"
        },
        {
            "value": "Test 3"
        }
    ]}
    onChange={e => console.log(e)}
    label="State"
    placeholder='Select a value'
/>
```


## Authors

- [@shiftytab](https://www.github.com/shiftytab)


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)