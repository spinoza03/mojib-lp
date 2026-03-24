# 📊 Leads Dashboard - Mojib

## Accès au Tableau de Bord

**URL:** `http://localhost:8080/leads` (local) ou `https://yourdomain.com/leads` (production)

**PIN d'accès:** `300206`

---

## 🔐 Authentification

1. Navigateur vers `/leads`
2. Entrer le PIN: **300206**
3. Le PIN est stocké dans `localStorage` - vous resterez connecté jusqu'à la déconnexion manuelle

---

## 📋 Fonctionnalités

### Tableau de Statistiques
- **Total**: Nombre total de leads
- **Nouveau**: Leads non traités
- **Contacté**: Leads ayant reçu un message
- **Qualifié**: Leads qualifiés pour conversion
- **Converti**: Leads transformés en clients
- **Perdu**: Leads abandonnés

Cliquez sur une stat pour filtrer le tableau.

### Gestion des Leads

#### Statut
Changez le statut d'un lead via le dropdown:
- **Nouveau** → État initial
- **Contacté** → Message WhatsApp envoyé
- **Qualifié** → Prospect de qualité
- **Converti** → Client acquis
- **Perdu** → Prospect abonné

#### Actions Disponibles

| Icône | Action | Description |
|-------|--------|-------------|
| 💬 | WhatsApp | Envoyer un message WhatsApp au prospect |
| ✏️ | Notes | Ajouter/modifier les notes internes |
| 👁️ | Afficher Notes | Afficher les notes sauvegardées |
| 🗑️ | Supprimer | Supprimer le lead (confirmation requise) |

---

## 📱 Envoyer un Message WhatsApp

### Fonctionnement Automatique
Quand vous cliquez sur l'icône **WhatsApp** (💬):

1. **Format du numéro**: Automatiquement converti au format WhatsApp
   - `0612345678` → `212612345678`
   - `612345678` → `212612345678`
   - `+212612345678` → `212612345678`

2. **Lien wa.me**: Ouvre le chat WhatsApp avec le message pré-rempli:
   ```
   Bonjour [Nom], merci pour votre intérêt pour Mojib ! 🙏
   ```

3. **Redirection**: Ouvre dans un nouvel onglet via `wa.me`

---

## 📝 Notes et Annotations

### Ajouter des Notes
1. Cliquez sur l'icône **✏️** (Edit)
2. Tapez vos notes
3. Cliquez **Sauvegarder**

### Voir les Notes
- Cliquez sur l'icône **👁️** pour afficher les notes
- Cliquez à nouveau pour masquer

---

## 🗄️ Données Stockées

Tous les changements sont sauvegardés en **temps réel** dans Supabase:

```
Table: leads
Colonnes:
- id (UUID)
- name (Nom du prospect)
- clinic_name (Entreprise)
- industry (Secteur)
- city (Ville)
- whatsapp (Téléphone)
- status (Statut: new/contacted/qualified/converted/lost)
- notes (Notes internes)
- created_at (Date création)
- updated_at (Dernière modification)
```

---

## 🚀 Utilisation Recommandée

1. **Matin**: Filtrez par "Nouveau" pour voir les prospects du jour
2. **Qualification**: Changez le statut à "Contacté"
3. **Suivi**: Utilisez WhatsApp pour envoyer des messages personnalisés
4. **Notes**: Enregistrez les détails de chaque conversation
5. **Conversion**: Mettez à jour le statut quand un lead devient client

---

## 🔒 Sécurité

- ✅ PIN protégé (code `300206`)
- ✅ localStorage pour session (déconnexion disponible)
- ✅ Supabase pour chiffrement des données
- ✅ Authentification simple et sécurisée

---

## 📞 Support

Pour des questions ou modifications, contactez l'équipe Mojib via WhatsApp.
