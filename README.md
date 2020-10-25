# @madkom-ui/core

Projekt ten zawiera zbiór powtarzalnego kodu w projektach frontendowych. Ma na celu zmiejszenie kosztów związanych z implementacją aplikacji frontendowych. 

## FAQ
### Czy to kolejny mkJS?!
// tutaj przedstawiam koncepcję **kompozycji** :muscle: na przykładnie query-params

### No ale zależności...
// zależności nie są problemem jeśli mamy dobrze wyznaczone granice

// dobrze jeśli zależność bazuje na jakiś standardach

## Jak tego użyć?
Jeśli projekt został wygenerowany za pomocą `yarn create react-app --template=madkom` konfiguracja jest gotowa. 

Uwtórz plik `.npmrc` z zawartością `registry=https://npm.madkom.pl`, potem `yarn add @madkom/core`

## Dokumentacja
Lista dostępnych paczek wraz z dokumentacją znajdują się na http://komponenty.madkom.pl

## Chciałbym dodać coś od siebie
Jeśli zauważysz błąd, masz pomysł lub uwagi [dodaj isses-a](https://gitlab.madkom.pl/fronted/madkom-ui/issues/new)


// jak rozwijać produkt

// koncepcje którymi się kierujemy

// narzędzia z których korzystamy ts, eslint, prettier, storybook, RTL

// docker

### Polecenia
`yarn new [nazwa-paczki] [tsdx template]` 

`yarn storybook`

`yarn test`

`yarn build`

`yarn build-storybook`

`yarn publish`

## Technikalia
// monorepo, yarn, lerna

// tsdx (RLT)

// storybook

// wersjonowanie

## Źródła:
- React
- Typescript
- TSDX
- Storybook
- Lerna
- chakra-ui
- react-form-hooks
- react-query
- react-intl
