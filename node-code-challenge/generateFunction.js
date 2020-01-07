// Creating a "Node Module", to "Import" in other Node Files.
exports.generateMessage = (locations) => {
    return 'Nucamp offers classses in ' + locations.join(', ') + '.'
}