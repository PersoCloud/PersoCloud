export class AvailableData {
   public static fields = [{
		groupLabel:"Finance",
		items: [{
			field: "Bill",
			label: "Facture"
		}]
	},
	{
		groupLabel:"Energie",
		items: [{
			field: "Consuptionstatement",
			label: "Consommation électrique (EDF)"
		}]
	},
	{
		groupLabel:"Santé",
		items: [{
			field: "Mood",
			label: "Humeur"
		}]		
	}];

	public static groupKeys = {
		Bill: [{
				key: "vendor",
				label: "Vendeur"
			},
			{
				key: "type",
				label: "Type"
			}],
		Consuptionstatement: [{
				key: "statementCategory",
				label: "Catégorie"
			},
			{
				key: "statementReason",
				label: "Raison du relevé"
			},
			{
				key: "statementType",
				label: "Type de relevé"
			}],
		Mood: []		
	};
	
	public static metakeyKeys = {
		Bill: [{
				key: "amount",
				label: "Montant"
			}],
		Consuptionstatement: [{
				key: "value",
				label: "Montant"
			}],
		Mood: [{
			key: "value",
			label: "Humeur"
			}]		
	};
}