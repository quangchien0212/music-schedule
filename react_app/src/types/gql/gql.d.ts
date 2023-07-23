interface CreateRecordVars<Attributes> {
  input: {
    attributes: Attributes
  }
}

interface ModifyRecordVars<Attributes> {
  input: {
    id: String
    attributes: Attributes
  }
}

interface MutationBaseData {
  success: boolean
  errors: [String]
}
