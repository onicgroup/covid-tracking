[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<p align="center">
  <a href="https://github.com/onicgroup/covid-tracking">
    <img src="public/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Covid-19 Tracking</h3>

  <p align="center">
    Track the number of coronavirus cases around the world.
    <br />
    <a href="https://www.covidtracking.org">View Website</a>
    ·
    <a href="https://github.com/onicgroup/covid-tracking/issues">Report Bug</a>
    ·
    <a href="https://github.com/onicgroup/covid-tracking/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
<!--* [Usage](#usage)-->
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project
[![Product Name Screen Shot][product-screenshot]](https://www.covidtracking.org)

### Built With
Here is a list of the major frameworks used to build this project.
* [Next](https://nextjs.org/)
* [React](https://reactjs.org/)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [Styled Components](https://styled-components.com/)
* [Express](https://expressjs.com/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites
* [node](https://nodejs.org/en/)
* [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Installation
1. Clone the repo
```sh
git clone https://github.com/onicgroup/covid-tracking
```
2. You will need 2 X-RapidAPI-Key's, get the first one from [here](https://rapidapi.com/astsiatsko/api/coronavirus-monitor) and the second one from [here](https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics). Copy paste these somewhere safe for now.
3. Create a .env file
```sh
touch .env
```
4. Add the following key value pairs:
```dotfile
COUNTRIES_API_KEY='YOUR FIRST X-RapidAPI-Key'
PROVINCES_API_KEY='YOUR SECOND X-RapidAPI-Key'
```
5. Install NPM packages
```sh
npm install
```

### Running the project
1. Development server
```sh
npm run dev
```
2. Production build
```sh 
npm run-script build
npm start -p 5000
```

<!-- ROADMAP -->
## Roadmap
See the [open issues][issues-url] for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Arashdeep Panesar - as2panes@uwaterloo.ca

Project Link: [https://github.com/onicgroup/covid-tracking][product-url]

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Coronavirus monitor](https://rapidapi.com/astsiatsko/api/coronavirus-monitor)
* [COVID-19 Coronavirus Statistics](https://rapidapi.com/KishCom/api/covid-19-coronavirus-statistics)

<!-- CONSTANTS -->

[contributors-shield]: https://img.shields.io/github/contributors/onicgroup/covid-tracking.svg?style=flat-square
[contributors-url]: https://github.com/onicgroup/covid-tracking/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/onicgroup/covid-tracking.svg?style=flat-square
[forks-url]: https://github.com/onicgroup/covid-tracking/network/members

[stars-shield]: https://img.shields.io/github/stars/onicgroup/covid-tracking.svg?style=flat-square
[stars-url]: https://github.com/onicgroup/covid-tracking/stargazers

[issues-shield]: https://img.shields.io/github/issues/onicgroup/covid-tracking.svg?style=flat-squareÂ
[issues-url]: https://github.com/onicgroup/covid-tracking/issues

[license-shield]: https://img.shields.io/github/license/onicgroup/covid-tracking.svg?style=flat-square
[license-url]: https://github.com/onicgroup/covid-tracking/blob/master/LICENSE.txt

[product-screenshot]: assets/images/screenshot.png
[product-url]: https://github.com/onicgroup/covid-tracking
