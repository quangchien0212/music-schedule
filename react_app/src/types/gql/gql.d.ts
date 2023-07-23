interface CreateRecordVars<Attributes> {
  input: {
    attributes: Attributes
  }
}

interface MutationBaseData {
  success: boolean
  errors: [String]
}