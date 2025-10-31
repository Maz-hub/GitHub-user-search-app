const UserCard = ({user}) => {
    return ( 
        <div>
          <img
            src={user.avatar_url}
            alt={user.name}
            className="rounded-full h-[117px]"
          />
          <h2>{user.name || user.login}</h2>
          <p>{`Joined ${user.created_at}`}</p>
          <p>{user.login}</p>
          <p>{user.bio}</p>
          <p>{`Repos ${user.public_repos}`}</p>
          <p>{`Followers ${user.followers}`}</p>
          <p>{`Following ${user.following}`}</p>
          <div className="flex">
            <img src="/images/icon-location.svg" alt={user.location} />
            <p>{user.location || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-website.svg" alt={user.blog} />
            <p>{user.blog || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-twitter.svg" alt={user.twitter_username} />
            <p>{user.twitter_username || "Not Available"}</p>
          </div>
          <div className="flex">
            <img src="/images/icon-company.svg" alt={user.company} />
            <p>{user.company || "Not Available"}</p>
          </div>
        </div>
     );
}
 
export default UserCard;