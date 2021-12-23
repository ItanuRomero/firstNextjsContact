async function getGithubUser(request, response) {
    const githubApiSecret = process.env.GITHUB_API_SECRET;
    const user = await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            Authorization: `token ${githubApiSecret}` 
        }
    });
    const userResponseJson = await user.json();
    const myGithubUser = {
        name: userResponseJson.name,
        bio: userResponseJson.bio,
        followers: userResponseJson.followers,
        blog: userResponseJson.blog
    }
    const dateUpdate = new Date();
    response.setHeader('Cache-control', 's-maxage=10, stale-while-revalidate');
    response.json({
        user: myGithubUser,
        lastTimeUpdated: dateUpdate.toGMTString()
    });
}

export default getGithubUser;