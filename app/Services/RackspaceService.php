<?php namespace Gifable\Services;

use OpenCloud\Rackspace;

class RackspaceService {

    public function uploadFile($remoteFilename, $filename)
    {
        $client = new Rackspace(Rackspace::US_IDENTITY_ENDPOINT, array(
            'username' => env('RACKSPACE_USERNAME'),
            'apiKey' => env('RACKSPACE_API_KEY')
        ));

        $objectStoreService = $client->objectStoreService(null, env('RACKSPACE_REGION'));

        $container = $objectStoreService->getContainer(env('RACKSPACE_CONTAINER'));

        $fileData = fopen($filename, 'r');
        $object = $container->uploadObject($remoteFilename, $fileData);

        return $object;
    }

}
