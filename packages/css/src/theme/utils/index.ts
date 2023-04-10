const utils = {
  paddingX: (value: string | number) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  paddingY: (value: string | number) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  marginX: (value: string | number) => ({
    marginLeft: value,
    marginRight: value
  }),
  marginY: (value: string | number) => ({
    marginTop: value,
    marginBottom: value
  })
}

export default utils
