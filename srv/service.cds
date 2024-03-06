using {db} from '../db/schema';

service MyService {
    @odata.draft.enabled
    entity VOB as projection on db.VOB;
       @odata.draft.enabled
    entity VOB2 as projection on db.VOB2;
    entity YOY as projection on db.YOY;
}
