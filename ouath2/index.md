# OAuth2 - A simpler way

RFC: [https://datatracker.ietf.org/doc/html/rfc6749](https://datatracker.ietf.org/doc/html/rfc6749)

A [Resource owner](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1.md) owns a resource located at a [resource server](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1.md) which can only be accessed through a key, and that key is obtained from [Authorization server](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1.md) by exchanging Resource Owners credentials.

Problem: How can a [Client](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1.md) access a [Resource Owner](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1.md)'s private resource?
Solution: Get a key for the resource somehow.

Things to consider:
- How the key is obtained to Client from Resource Owner, (frontchannel / backchannel)
- How long will be duration of key's validity
- Can a key access all resources/ partial/ only-allowed resources.
- How easy it is to provide/revoke/refresh a key to a Client

Tokens?:
- Access Token: A key to Resource Owner's property (resource). # THE KEY ;)
- Refresh Token: A way to renew Access Token, as Access Token's have expiry

![OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled.png](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled.png)

**Grant Types:**

1. **Auth-Code** Grant:
    - Flow:
        1. Client redirects Resource Owner to Authorization Server's auth page, with scopes needed.
        2. Resource Owner authenticates with Authorization Server
        3. Authorization Server sends back auth-code in url redirection (Redirection URI)
        4. User Agent calls Redirection URI(to Client) with the code ←- client gets auth_code (frontchannel)
        5. Client calls Authorization Server with Client Credentials + auth-code to get access_token, refresh_token in response (backchannel)
    - Point to note:
        - Client Authorization happens without any knowledge from Client
        - Even though auth-code flows in front channnel, in order to get Access Token , a client authentiacation through Client Credntials is must(through backchanel)
        - It's basically providing offline access of a Resource Owner's resource to a Client, which also means 
        delegated-authorization
        - As long as Client have refresh_token it can access resource on behalf of Resource Owner. Useful for prolongated-access
        

![OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%201.png](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%201.png)

1. **Implicit** Grant:
    - Flow:
        1. Client redirects Resource Owner to Authorization Server's auth page, with scopes needed.
        2. Resource Owner authenticates with Authorization Server.
        3. Authorization Server sends back access_token in url-fragement which gets redirected back to Client
    - Points:
        - Even though it's encrypted, Access Token flows through front-channel, and the sub-key to decrypt Access Token from url-fragement is also flows through front channel through script executing in User Agent(found via unauthenticated channel)
        - No refresh token is provided, so short access duration(access token expiry)
        - Easy to snoop in as Access Token in encrypted form is availabel in url
        

![OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%202.png](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%202.png)

1. **Resource Owner Password Credentials** Grant:
    - Flow:
        1. Resource Owner provides credentials to Client directly
        2. Client authenticates on behalf of user to get Access Token
    - Points:
        - Long lived as Client has Resource Owner credentials -- Bad idea --> full access to user's resource
        - Only option to remove a Client from resource access is to change password.
        - Although refresh token is provided, there's no need a Client already has Resource Owner's creds.
        

![OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%203.png](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%203.png)

1. C**lient Credentials** Grant:
    - Flow:
        1. Client authenticates with Authorization Server with Client Credentials only to get access token
    - Points:
        - No user involved
        - Not suited for scope based user-mgmt (/any) system
        

![OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%204.png](OAuth2%20-%20A%20simpler%20way%2093685cfc2b244563ab81cfee1e0ec4f1/Untitled%204.png)

- Summary:
    - Auth-code: 
    - prolongated-access 
    - offline access of a Resource Owner's resource to a Client, 
    - scoped access to RO's data
    - Implicit:
    - short access (no refresh token)
    - Access Token flows through front-channel
    - Resource Owner Password Credentials:
    - Long lived (full access to user's resource)
    - Resource Owner provides credentials to Client directly
    - Client Credentials:
    - no user involved
    - auth happens with client id/secret
    
- Resources & Links:
    - [https://www.ory.sh/hydra/docs/concepts/before-oauth2](https://www.ory.sh/hydra/docs/concepts/before-oauth2)
    - [https://datatracker.ietf.org/doc/html/rfc6749](https://datatracker.ietf.org/doc/html/rfc6749)
    
- Terminology:
    - Resource Owner: A resource owner is the user account who authorizes an external application to access their account. This access is limited (scoped) to particular actions (the granted "scopes" like read photos or write messages).
    - Authorization Server : The OAuth 2.0 Authorization Server implements the OAuth 2.0 protocol (and optionally OpenID Connect).
    - Resource Provider: The resource provider is the service that hosts (provides) the resources. These resources (e.g. blog articles, printers, todo lists) are owned by a resource owner (user) mentioned above.
    - Identity Provider: The Identity Provider is a service that allows users to register accounts, log in, etc.
    - Client: The OAuth 2.0 Client is the external application that wants to access a resource owner's resources (read a user's images). To do that, it asks the OAuth 2.0 Authorization Server for an access token in a resource owner's behalf. The authorization server will ask the user if he/she "is ok with" giving that external application e.g. write access to personal images.
    - User Agent: User Agent is usually a browser.
    - OpenID: OpenID Connect is a protocol built on top of OAuth 2.0 for just authentication (instead of authorizing access to resources).
    
- OAuth2 and OpenID Connect are so-called delegation protocols which are not concerned with user registration, password recovery, changing a password or email address and so on.
- Actually, OAuth2 and OpenID Connect do not even specify how your users sign in (email and password? username and password? pass-wordless? SMS 2fa?), they only establish that you need a method for users to sign in.
- With OAuth2 and OpenID Connect you end up with three session layers:
    - Your Application's Session Manager keeps track of the user within your application. You will use OpenID Connect to initiate and complete the login, but your application needs to store and track and invalidate the session.
    - Oauth2 Server maintains a session cookie. When a user signs in, the cookie will be set for that user. This allows the next OAuth2 request to complete without requesting the user to sign in again.
    - Optionally - If your application connects to a third-party identity provider (e.g. Sign in with Google, GitHub, Facebook, ...) that third party provider also maintains a session of the user.
- We need OAuth2 and OpenID connect because we want developers to not know how to interact with our users and our users' data.