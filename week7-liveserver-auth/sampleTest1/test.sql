SELECT people.first_name, companies.name AS company_name
FROM people
INNER JOIN companies ON people.company_id = companies.id
WHERE people.company_id IS NOT NULL;

-- SELECT people.first_name, companies.name
-- FROM people
-- WHERE company_id IS NOT NULL;


-- SELECT ProductID, ProductName, CategoryName
-- FROM Products
-- INNER JOIN Categories ON Products.CategoryID = Categories.CategoryID;