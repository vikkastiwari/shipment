export interface Filter {
    "id": string,
    "label": string,
    "checked": boolean
}

export interface Shipment {
    "AssignedToUserId": string,
    "DeliveryMethod": string,
    "ExpectedShipmentDate": string,
    "OrderNo": string,
    "ScacAndService": string,
    "ShipNode": string,
    "ShipmentKey": string,
    "ShipmentNo": string,
    "Status": string,
    "BillToAddress": {
      "DayPhone": string,
      "EMailID": string,
      "FirstName": string,
      "LastName": string,
      "PersonInfoKey": string
    },
    "ShipmentLines": {
      "TotalNumberOfRecords": string
    }
  }

export interface ShipmentProductCard {
    "Quantity": string,
    "ShipmentLineKey": string,
    "OrderLine": {
      "ItemDetails": {
        "DisplayUnitOfMeasure": string,
        "Description": string,
        "ImageUrl": string,
        "ItemID": string
      }
    }
  }