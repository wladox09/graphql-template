function createAuthorsUseCase(root, args, respository) {
    return respository.createAuthors(args);
}

module.exports = {
    createAuthorsUseCase
};