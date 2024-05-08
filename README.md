1. Run `sequelize-cli db:migrate`
2. Run `node index.js`
3. You can add companies using something like curl to POST to the API:
```
curl -X POST -H "Content-Type: application/json" -d '{
  "name": "Example Company",
  "country": "Example Country",
  "website": "https://example.com",
  "email": "example@example.com"
}' http://localhost:3000/new_company
```
3. You can now navigate to http://localhost:5000/companies/unverified to see unverified companies.
4. You can now navigate to http://localhost:5000/companies to see all companies.
5. Companies can be verified using 
